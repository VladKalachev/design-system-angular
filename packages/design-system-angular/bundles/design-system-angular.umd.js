(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('design-system-angular', ['exports', '@angular/core'], factory) :
    (factory((global['design-system-angular'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DesignSystemAngularService = /** @class */ (function () {
        function DesignSystemAngularService() {
        }
        DesignSystemAngularService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DesignSystemAngularService.ctorParameters = function () { return []; };
        /** @nocollapse */ DesignSystemAngularService.ngInjectableDef = i0.defineInjectable({ factory: function DesignSystemAngularService_Factory() { return new DesignSystemAngularService(); }, token: DesignSystemAngularService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Directive, args: [{
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
            { type: i0.Component, args: [{
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
    var DesignSystemAngular = /** @class */ (function () {
        function DesignSystemAngular() {
        }
        /**
         * @return {?}
         */
        DesignSystemAngular.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DesignSystemAngular
                };
            };
        DesignSystemAngular.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [DesignSystemAngularComponent, RowDirective, FormComponent],
                        imports: [],
                        exports: [DesignSystemAngularComponent, FormComponent, RowDirective]
                    },] }
        ];
        return DesignSystemAngular;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DesignSystemAngularService = DesignSystemAngularService;
    exports.DesignSystemAngularComponent = DesignSystemAngularComponent;
    exports.DesignSystemAngular = DesignSystemAngular;
    exports.ɵb = FormComponent;
    exports.ɵa = RowDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=design-system-angular.umd.js.map