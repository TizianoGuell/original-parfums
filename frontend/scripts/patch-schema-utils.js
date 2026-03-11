const fs = require("fs");
const path = require("path");

const targetPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "schema-utils",
  "dist",
  "index.js",
);

if (!fs.existsSync(targetPath)) {
  process.exit(0);
}

const source = fs.readFileSync(targetPath, "utf8");

if (source.includes("schemaUtils.validate = validate;")) {
  process.exit(0);
}

const legacyExport = `module.exports = {
  validate,
  ValidationError,
  enableValidation,
  disableValidation,
  needValidate
};`;

if (!source.includes(legacyExport)) {
  process.exit(0);
}

const patchedExport = `const schemaUtils = (...args) => validate(...args);
schemaUtils.validate = validate;
schemaUtils.ValidationError = ValidationError;
schemaUtils.enableValidation = enableValidation;
schemaUtils.disableValidation = disableValidation;
schemaUtils.needValidate = needValidate;
module.exports = schemaUtils;`;

fs.writeFileSync(targetPath, source.replace(legacyExport, patchedExport));
