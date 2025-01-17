import { ValidationObject } from '@console/shared';

import { DiskType } from '../../constants';
import { CombinedDisk } from '../../k8s/wrapper/vm/combined-disk';
import { UIStorageValidation } from '../../types/ui/storage';
import { VMLikeEntityKind } from '../../types/vmLike';
import { TemplateValidations } from '../../utils/validations/template/template-validations';

export type StorageSimpleData = {
  name?: string;
  content?: string;
  source?: string;
  diskInterface?: string;
  size?: string;
  storageClass?: string;
  type?: DiskType;
};

export type StorageSimpleDataValidation = {
  name?: ValidationObject;
  content?: ValidationObject;
  source?: ValidationObject;
  diskInterface?: ValidationObject;
  size?: ValidationObject;
  storageClass?: ValidationObject;
  type?: ValidationObject;
};

export type StorageBundle = StorageSimpleData & {
  disk: CombinedDisk;
  templateValidations?: TemplateValidations;
  diskValidations?: UIStorageValidation;
  type?: DiskType;
  metadata?: { name?: string };
};

export type VMStorageRowActionOpts = {
  withProgress: (promise: Promise<any>) => void;
  templateValidations?: TemplateValidations;
};

export type VMStorageRowCustomData = {
  vmLikeEntity: VMLikeEntityKind;
  columnClasses: string[];
  isDisabled: boolean;
  pendingChangesDisks?: Set<string>;
} & VMStorageRowActionOpts;
