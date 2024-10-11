import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME =
  process.env.NODE_ENV === 'development'
    ? 'development.yaml'
    : process.env.NODE_ENV === 'production'
      ? 'production.yaml'
      : 'local.yaml';

export default () => {
  return yaml.load(
    readFileSync(
      join(__dirname, '../../../libs/config/env', YAML_CONFIG_FILENAME),
      'utf8',
    ),
  ) as Record<string, any>;
};
