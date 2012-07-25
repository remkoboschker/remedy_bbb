define([
    "lodash"
], function (_){

    // https://gist.github.com/1610397 nestCollection helper function by https://gist.github.com/geddesign

    var nestModel = function (model, attributeName, nestedModel) {
      
        model.set(attributeName, nestedModel.toJSON(), {silent: true});
            //create empty arrays if none
            /*
            nestedModel.bind('add', function (initiative) {
              if (!model.get(attributeName)) {
                model.attributes[attributeName] = [];
              }
              model.get(attributeName).push(initiative.attributes);
            });

            nestedModel.bind('remove', function (initiative) {
              var updateObj = {};
              updateObj[attributeName] = _.without(model.get(attributeName), initiative.attributes);
              model.set(updateObj);
            });
            */
            return nestedModel;
      };

    return nestModel;

});


