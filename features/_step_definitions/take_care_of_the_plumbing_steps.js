var take_care_of_the_plumbing_StepDefinitionsWrapper = function () {
    this.World = require("../_support/world.js").World; // overwrite default World constructor

    // Scenario:   valid client certificate with my name present
    
    this.Given(/^I have a valid client certificate installed in my browser$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.Given(/^the client certificate has my name on it$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Given(/^I do have an account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.When(/^I go to any page on https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should access my own account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.Then(/^I should continue to the page I accessed$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should be able to view my account name on the page$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    
    // Scenario:   valid client certificate with my name present but no account
    
    this.Given(/^I have a valid client certificate installed in my browser$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.Given(/^the client certificate has my name on it$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Given(/^I do not have an account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.When(/^I go to any page on https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should not access any account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should receive a message informing me about a failure to authenticate$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should be redirected to https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    
    // Scenario:   valid client certificate with another employee's name present

    this.Given(/^I have a valid client certificate installed in my browser$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Given(/^the client certificate has another employee's name on it$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Given(/^he has an account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.When(/^I go to any page on https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should access his account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should continue to the page I accessed$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
   
    this.Then(/^I should be able to view his account name on the page$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    
    // Scenario:   valid client certificate with another employee's name present but no account
    
    this.Given(/^I have a valid client certificate installed in my browser$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Given(/^the client certificate has another employee's name on it$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Given(/^he does not have an account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.When(/^I go to any page on https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should not access any account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should receive a message informing me about a failure to authenticate$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.Then(/^I should be redirected to https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    
    // Scenario:   valid client certificate with no employee's name present
    
    this.Given(/^I have a valid client certificate installed in my browser$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.Given(/^the client certificate does not have an employee's name on it$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.When(/^I go to any page on https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should not access any account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should receive a message informing me about a failure to authenticate$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.Then(/^I should be redirected to https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    
    //    Scenario:   no client certificate present
    
    this.Given(/^I do not have a client certificate installed in my browser$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.When(/^I go to any page on https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should not access any account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should receive a message informing me about a failure to authenticate$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should be redirected to https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    
    // Scenario:   invalid client certificate present
    
    this.Given(/^I have an invalid client certificate installed in my browser$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });


    this.When(/^I go to any page on https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should not access any account$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should receive a message informing me about a failure to authenticate$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });
    
    this.Then(/^I should be redirected to https:\/\/remedy\.informatietuin\.nl\/$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

};

module.exports = take_care_of_the_plumbing_StepDefinitionsWrapper;