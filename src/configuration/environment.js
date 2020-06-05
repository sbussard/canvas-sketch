export const REQUIRED_VARIABLES = ['GOOGLE_ANALYTICS_ID', 'AIRTABLE_API_KEY'];

/* eslint-disable */

export const PROCESS_ENV =
  process.env.NODE_ENV === 'development'
    ? { GOOGLE_ANALYTICS_ID: '', AIRTABLE_API_KEY: '', ...process.env }
    : process.env;

/* eslint-enable */

let findMissingVariable = variable =>
  Object.keys(PROCESS_ENV).indexOf(variable) === -1;

let missingVariables = REQUIRED_VARIABLES.filter(findMissingVariable);

if (missingVariables.length > 0) {
  let sep = '\n\t> ';
  throw new Error(
    `Missing environment variables: \n${sep}${missingVariables.join(sep)}\n`
  );
}

let toEnvironmentVariableJsonMap = variableName => ({
  [variableName]: JSON.stringify(PROCESS_ENV[variableName])
});

let shallowMerge = (previous, current) => ({ ...previous, ...current });

export const ENV = REQUIRED_VARIABLES.map(toEnvironmentVariableJsonMap).reduce(
  shallowMerge,
  {}
);
