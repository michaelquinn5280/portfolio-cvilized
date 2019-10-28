!function(){"use strict";angular.module("portfolioApp",["ngRoute","ngResource","legalService","profileService","greetingService","projectsService","contactInfoService","easypiechart"])}(),function(){"use strict";function a(a,b){a.contactInfo=b.query()}angular.module("portfolioApp").controller("contactInfoController",a),a.$inject=["$scope","ContactInfo"]}(),function(){"use strict";var a=angular.module("contactInfoService",["ngResource"]);a.factory("ContactInfo",["$resource",function(a){return a(apiRootUrl+"api/contactinfo/"+masterProfileId,{},{query:{method:"GET",params:{},isArray:!1}})}])}(),function(){"use strict";function a(a,b){a.greeting=b.query()}angular.module("portfolioApp").controller("greetingController",a),a.$inject=["$scope","Greeting"]}(),function(){"use strict";var a=angular.module("greetingService",["ngResource"]);a.factory("Greeting",["$resource",function(a){return a(apiRootUrl+"api/greeting/"+masterProfileId,{},{query:{method:"GET",params:{},isArray:!1}})}])}(),function(){"use strict";function a(a,b){a.copyright=b.query()}angular.module("portfolioApp").controller("legalController",a),a.$inject=["$scope","Copyright"]}(),function(){"use strict";var a=angular.module("legalService",["ngResource"]);a.factory("Copyright",["$resource",function(a){return a(apiRootUrl+"api/copyright/"+masterProfileId,{},{query:{method:"GET",params:{},isArray:!1}})}])}(),function(){"use strict";function a(a){a.options={animate:{duration:2e3,enabled:!0},barColor:"#CF5037",trackColor:"#545454",size:180,scaleColor:!1}}angular.module("portfolioApp").controller("pieChartController",a),a.$inject=["$scope"]}(),function(){"use strict";function a(a,b){a.profile=b.query()}angular.module("portfolioApp").controller("profileController",a),a.$inject=["$scope","Profile"]}(),function(){"use strict";var a=angular.module("profileService",["ngResource"]);a.factory("Profile",["$resource",function(a){return a(apiRootUrl+"api/profile/"+masterProfileId,{},{query:{method:"GET",params:{},isArray:!1}})}])}(),function(){"use strict";function a(a,b){a.projects=b.query(),a.timelineBuckets=function(a,b){var c=[];return angular.forEach(a,function(a){-1==c.indexOf(a.endYear())&&c.push(a.endYear())}),c}}angular.module("portfolioApp").controller("projectsController",a),a.$inject=["$scope","Projects"]}(),function(){"use strict";angular.module("portfolioApp").filter("withProjectEndDate",function(){return function(a,b){var c=[];return angular.forEach(a,function(a){a.endYear()==b&&c.push(a)}),c}})}(),function(){"use strict";var a=angular.module("projectsService",["ngResource"]);a.factory("Projects",["$resource","$filter",function(a,b){var c=a(apiRootUrl+"api/projects/"+masterProfileId,{},{query:{method:"GET",params:{},isArray:!0}});return c.prototype.endYear=function(){return b("date")(this.EndDate,"yyyy")},c}])}();