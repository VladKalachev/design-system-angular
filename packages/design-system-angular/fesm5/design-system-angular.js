import { Injectable, Directive, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DesignSystemAngularService = /** @class */ (function () {
    function DesignSystemAngularService() {
    }
    DesignSystemAngularService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DesignSystemAngularService.ctorParameters = function () { return []; };
    /** @nocollapse */ DesignSystemAngularService.ngInjectableDef = defineInjectable({ factory: function DesignSystemAngularService_Factory() { return new DesignSystemAngularService(); }, token: DesignSystemAngularService, providedIn: "root" });
    return DesignSystemAngularService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DesignSystemAngularComponent = /** @class */ (function () {
    function DesignSystemAngularComponent() {
    }
    /**
     * @return {?}
     */
    DesignSystemAngularComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DesignSystemAngularComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-design-system-angular',
                    template: "\n    <p>\n      design-system-angular works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    DesignSystemAngularComponent.ctorParameters = function () { return []; };
    return DesignSystemAngularComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RowDirective = /** @class */ (function () {
    function RowDirective() {
    }
    RowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[row]'
                },] }
    ];
    /** @nocollapse */
    RowDirective.ctorParameters = function () { return []; };
    return RowDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-form',
                    template: "<p>\n  form works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return []; };
    return FormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DesignSystemAngularModule = /** @class */ (function () {
    function DesignSystemAngularModule() {
    }
    DesignSystemAngularModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DesignSystemAngularComponent, RowDirective, FormComponent],
                    imports: [],
                    exports: [DesignSystemAngularComponent, FormComponent, RowDirective]
                },] }
    ];
    return DesignSystemAngularModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DesignSystemAngularService, DesignSystemAngularComponent, DesignSystemAngularModule, FormComponent as ɵb, RowDirective as ɵa };

//# sourceMappingURL=design-system-angular.js.map