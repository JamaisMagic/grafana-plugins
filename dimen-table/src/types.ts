import { TableSortByFieldState } from '@grafana/ui';

export interface Options {
  frameIndex: number;
  showHeader: boolean;
  sortBy?: TableSortByFieldState[];
  fieldNameInstance: string;
  fieldNameTarget: string;
  fieldNameValue: string;
}

export interface TableSortBy {
  displayName: string;
  desc: boolean;
}

export interface CustomFieldConfig {
  width: number;
  displayMode: string;
}
