angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})
.controller('DashboardCtrl', function ($scope, lovelyDataService, $stateParams) {
    $scope.config = {};

    if ($stateParams.dashboardId == 0) {
        return;
    }

    lovelyDataService.getDashboardConfig($stateParams.dashboardId).then(function (results) {
        //$scope.config = JSON.parse(results.data.Value);

        $scope.config = {
            PackeryConfig: {},
            Widgets: [
                {
                    widget: {
                        type: 'kpi',
                        refresh: '5',
                        webId: 'A0EtIcvAS36yE2ccCuS-tUXgAajPZ9ZX65RGAygANOjDYOw6Q4Y3pFAE1c8OsWcnuWfCgU0FUVVJOMDQyXFNBTi1EU1RcSFZBQ1xURVJNSU5BTFNcVEVSTUlOQUwgMVxFQVNUXEFJUiBIQU5ETEVSIDI4XEFILTI4IFJFVFVSTiBBSVIgQ0FMQ1VMQVRJT05TfFJPT00gQUlSIFRFTVBFUkFUVVJF'
                    },
                    container: {
                        width: 2,
                        height: 2
                    }
                }, {
                    widget: {
                        type: 'linear-gauge',
                        refresh: '5',
                        start: 0,
                        end: 1500,
                        //targetId: 'A0EtIcvAS36yE2ccCuS-tUXgAajPZ9ZX65RGAygANOjDYOwffXeUu7YkFEalWC0lAWq6gU0FUVVJOMDQyXFNBTi1EU1RcSFZBQ1xURVJNSU5BTFNcVEVSTUlOQUwgMVxFQVNUXEFJUiBIQU5ETEVSIDI4XEFILTI4IFJFVFVSTiBBSVIgQ0FMQ1VMQVRJT05TfFJPT00gQ0FSQk9OIERJT1hJREUgTUFYSU1VTQ',
                        webId: 'A0EtIcvAS36yE2ccCuS-tUXgAajPZ9ZX65RGAygANOjDYOwgX6mwhal-Vw47iSXovLi1gU0FUVVJOMDQyXFNBTi1EU1RcSFZBQ1xURVJNSU5BTFNcVEVSTUlOQUwgMVxFQVNUXEFJUiBIQU5ETEVSIDI4XEFILTI4IFJFVFVSTiBBSVIgQ0FMQ1VMQVRJT05TfFJPT00gQ0FSQk9OIERJT1hJREUgMS1IT1VSIE1BWElNVU0'
                    },
                    container: {
                        width: 3,
                        height: 1
                    }
                },{
                    widget: {
                        type: 'bullet2',
                        refresh: '5',
                        start: 0,
                        end: 1500,
                        targetId: 'A0EtIcvAS36yE2ccCuS-tUXgAajPZ9ZX65RGAygANOjDYOwffXeUu7YkFEalWC0lAWq6gU0FUVVJOMDQyXFNBTi1EU1RcSFZBQ1xURVJNSU5BTFNcVEVSTUlOQUwgMVxFQVNUXEFJUiBIQU5ETEVSIDI4XEFILTI4IFJFVFVSTiBBSVIgQ0FMQ1VMQVRJT05TfFJPT00gQ0FSQk9OIERJT1hJREUgTUFYSU1VTQ',
                        startId: 'A0EtIcvAS36yE2ccCuS-tUXgAajPZ9ZX65RGAygANOjDYOwgX6mwhal-Vw47iSXovLi1gU0FUVVJOMDQyXFNBTi1EU1RcSFZBQ1xURVJNSU5BTFNcVEVSTUlOQUwgMVxFQVNUXEFJUiBIQU5ETEVSIDI4XEFILTI4IFJFVFVSTiBBSVIgQ0FMQ1VMQVRJT05TfFJPT00gQ0FSQk9OIERJT1hJREUgMS1IT1VSIE1BWElNVU0'
                    },

                    container: {
                        width: 3,
                        height: 1
                    }
                },

                 {
                     widget: {
                         type: 'kpi2',
                         refresh: '5',
                         webId: 'A0EPUDmN4uvgkyiAt_SPv5vtg991umqry5RGAvwANOjKA4ANSkJlh49lVwXIb5mEqRnkwSlVQSVRFUjAwMVxTQU4gRElFR08gQUlSUE9SVFxIVkFDXFRFUk1JTkFMU1xURVJNSU5BTCAxXEVBU1RcQUlSIEhBTkRMRVIgMjhcQUgtMjggUkVUVVJOIEFJUiBDQUxDVUxBVElPTlN8Uk9PTSBDQVJCT04gRElPWElERQ'
                     },
                     container: {
                         width: 2,
                         height: 2
                     }
                 },

                 {
                     widget: {
                         type: 'kpiValueOnly',
                         refresh: '5',
                         webId: 'A0EPUDmN4uvgkyiAt_SPv5vtg991umqry5RGAvwANOjKA4ANSkJlh49lVwXIb5mEqRnkwSlVQSVRFUjAwMVxTQU4gRElFR08gQUlSUE9SVFxIVkFDXFRFUk1JTkFMU1xURVJNSU5BTCAxXEVBU1RcQUlSIEhBTkRMRVIgMjhcQUgtMjggUkVUVVJOIEFJUiBDQUxDVUxBVElPTlN8Uk9PTSBDQVJCT04gRElPWElERQ'
                     },
                     container: {
                         width: 1,
                         height: 1
                     }
                 },
                  {
                      widget: {
                          type: 'kpi3',
                          refresh: '5',
                          webId: 'A0EPUDmN4uvgkyiAt_SPv5vtg991umqry5RGAvwANOjKA4ANSkJlh49lVwXIb5mEqRnkwSlVQSVRFUjAwMVxTQU4gRElFR08gQUlSUE9SVFxIVkFDXFRFUk1JTkFMU1xURVJNSU5BTCAxXEVBU1RcQUlSIEhBTkRMRVIgMjhcQUgtMjggUkVUVVJOIEFJUiBDQUxDVUxBVElPTlN8Uk9PTSBDQVJCT04gRElPWElERQ'
                      },
                      container: {
                          width: 2,
                          height: 2
                      }
                  }
            ]
        }
    });
})

.directive('dashboardList', function ($compile, lovelyDataService, $state) {

    return {
        scope: {
        },
        transclude: true,
        restrict: 'E',
        link: function ($scope, element, attrs) {
            
            lovelyDataService.getDashboards().then(function (results) {
                var html = "<ion-list>";

                for (var i = 0; i < results.data.length; i++) {
                    html += "<ion-item menu-close href=#/app/dashboard/" + results.data[i].WebId + ">" + results.data[i].Name + "</ion-item>";
                }
                html += "</ion-list>";

                var htmlElement = angular.element(html);
                $compile(htmlElement)($scope);
                element.append(htmlElement);

                $state.go("app.dashboard",{ "dashboardId": results.data[0].WebId }, { reload: true });
            })
        }
    }
})
