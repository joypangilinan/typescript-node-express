"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (payload, joiSchema) => {
    return joiSchema.validate(payload, {
        abortEarly: false,
        errors: {
            label: "key",
        },
    });
};
//# sourceMappingURL=joiValidator.utils.js.map