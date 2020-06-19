import React, { Component } from 'react';

import { Table, Select } from '@grafana/ui';
import {
  FieldMatcherID,
  PanelProps,
  DataFrame,
  SelectableValue,
  getFrameDisplayName,
  ArrayVector,
} from '@grafana/data';
import { Options } from './types';
import { css } from 'emotion';
// import { config } from 'app/core/config';
import { TableSortByFieldState } from '@grafana/ui/components/Table/types';

interface Props extends PanelProps<Options> {}

export class TablePanel extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onColumnResize = (fieldDisplayName: string, width: number) => {
    const { fieldConfig } = this.props;
    const { overrides } = fieldConfig;

    const matcherId = FieldMatcherID.byName;
    const propId = 'custom.width';

    // look for existing override
    const override = overrides.find(o => o.matcher.id === matcherId && o.matcher.options === fieldDisplayName);

    if (override) {
      // look for existing property
      const property = override.properties.find(prop => prop.id === propId);
      if (property) {
        property.value = width;
      } else {
        override.properties.push({ id: propId, value: width });
      }
    } else {
      overrides.push({
        matcher: { id: matcherId, options: fieldDisplayName },
        properties: [{ id: propId, value: width }],
      });
    }

    this.props.onFieldConfigChange({
      ...fieldConfig,
      overrides,
    });
  };

  onSortByChange = (sortBy: TableSortByFieldState[]) => {
    this.props.onOptionsChange({
      ...this.props.options,
      sortBy,
    });
  };

  onChangeTableSelection = (val: SelectableValue<number>) => {
    this.props.onOptionsChange({
      ...this.props.options,
      frameIndex: val.value || 0,
    });

    // Force a redraw -- but no need to re-query
    this.forceUpdate();
  };

  renderTable(frame: DataFrame, width: number, height: number) {
    const { options } = this.props;

    return (
      <Table
        height={height}
        width={width}
        data={frame}
        noHeader={!options.showHeader}
        resizable={true}
        initialSortBy={options.sortBy}
        onSortByChange={this.onSortByChange}
        onColumnResize={this.onColumnResize}
      />
    );
  }

  getCurrentFrameIndex() {
    const { data, options } = this.props;
    const count = data.series?.length;
    return options.frameIndex > 0 && options.frameIndex < count ? options.frameIndex : 0;
  }

  render() {
    const { data, height, width } = this.props;
    console.log('data: ', data);

    if (data.series && data.series.length > 0 && data.series[0]?.fields[0]?.config?.custom?.isModified !== true) {
      data.series.forEach((seriesItem, index) => {
        const handleResult = this.dataToFields(this.handleData(seriesItem), seriesItem.refId);
        if (handleResult && handleResult.length > 0) {
          seriesItem.fields = handleResult;
        }
      });
    }

    const count = data.series?.length;

    if (!count || count < 1) {
      return <div>No data</div>;
    }

    if (count > 1) {
      // const inputHeight = config.theme.spacing.formInputHeight;
      const inputHeight = 32;
      const padding = 8 * 2;
      const currentIndex = this.getCurrentFrameIndex();
      const names = data.series.map((frame, index) => {
        return {
          label: getFrameDisplayName(frame),
          value: index,
        };
      });

      return (
        <div className={tableStyles.wrapper}>
          {this.renderTable(data.series[currentIndex], width, height - inputHeight - padding)}
          <div className={tableStyles.selectWrapper}>
            <Select options={names} value={names[currentIndex]} onChange={this.onChangeTableSelection} />
          </div>
        </div>
      );
    }

    return this.renderTable(data.series[0], width, height - 12);
  }

  handleData(seriesItem: any) {
    const { options } = this.props;
    const { fields, refId } = seriesItem;
    if (!fields || fields.length <= 0) {
      return null;
    }
    const data: any = {};

    const instanceArr = fields.filter((item: any) => {
      const equalName = options.fieldNameInstance || 'instance';
      return item.name === equalName || item.name === `${equalName} #${refId}`;
    })[0];
    const targetArr = fields.filter((item: any) => {
      const equalName = options.fieldNameTarget || 'target';
      return item.name === equalName || item.name === `${equalName} #${refId}`;
    })[0];
    const valueArr = fields.filter((item: any) => {
      const equalName = 'Value';
      return item.name === equalName || item.name === `${equalName} #${refId}`;
    })[0];

    if (!instanceArr || !targetArr || !valueArr) {
      return null;
    }

    const instanceValuesArr = instanceArr.values.toArray();
    const targetValuesArr = targetArr.values.toArray();
    const valueValuesArr = valueArr.values.toArray();

    const lengthMin = Math.min(instanceValuesArr.length, 100000);

    for (let index = 0; index < lengthMin; index++) {
      const item = instanceValuesArr[index];
      if (Array.isArray(data[item])) {
        const found = data[item].find((dataItem: any) => {
          return dataItem[0] === targetValuesArr[index] && dataItem[1] === valueValuesArr[index];
        });
        if (found) {
          continue;
        }
        data[item].push([targetValuesArr[index], valueValuesArr[index]]);
      } else {
        data[item] = [[targetValuesArr[index], valueValuesArr[index]]];
      }
    }

    const dataKeys = Object.keys(data);

    for (let i = 0; i < dataKeys.length; i++) {
      for (let j = 0; j < dataKeys.length; j++) {
        if (i === j) {
          continue;
        }
        data[dataKeys[j]].forEach((itemJ: any) => {
          const found = data[dataKeys[i]].find((itemI: any) => itemI[0] === itemJ[0]);
          if (!found) {
            data[dataKeys[i]].push([itemJ[0], '-']);
          }
        });
      }
    }

    console.log('data2: ', data);

    return data;
  }

  dataToFields(data: any, refId = ' ') {
    if (!data) {
      return [];
    }
    const result: any[] = [];
    let dataKeys = Object.keys(data);

    for (let i = 0; i < dataKeys.length; i++) {
      result.push({
        config: {
          custom: {
            isModified: true,
          },
          filterable: false,
        },
        name: dataKeys[i],
        values: new ArrayVector(data[dataKeys[i]].map((item: any) => item[1])),
        type: 'string',
      });
    }
    result.unshift({
      config: {
        custom: {
          isModified: true,
        },
        filterable: false,
      },
      name: refId,
      values: new ArrayVector(data[dataKeys[0]].map((item: any) => item[0])),
      type: 'string',
    });

    return result;
  }
}

const tableStyles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,
  selectWrapper: css`
    padding: 8px;
  `,
};
