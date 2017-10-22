/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.fd9295c1-0771-45a7-ab30-00898e41203b';

const SKILL_NAME = 'Beauty Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a beauty fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Rinsing your face with icy water does not help tighten pores at all and hot water can dehydrate skin. It is best to wash with lukewarm water ',
    'Good workout helps blood circulation and keeps skin cells vital. But too much exercise can bring out excessive heat throughout the body which may lead to breakouts and skin irritation.',
    '20 minutes should be the maximum amount of time used for Facial masks.',
    'Keeping your cosmetics in cold refrigerator wont make them last longer. It is best to keep your cosmetics in shaded, sunlight-free environment.',
    'Using baby product for sensitive skin is not always the best choice for those with oily skin, since baby products are likely to be oily and extremely moisturizing',
    'Average life of perfumes after opening is up to 3 years.',
    'Average life of nail polish after opening is up to 1 year.',
    'Average life of mascara after opening is 3 to 6 months.',
    'Wear your sunscreen everyday. Even when its cloudy. According to American Acadamy of Dermatology, 80 percent of suns ultraviolet ray can pass through clouds.',
    'For sensitive skins, its best to exfoliate skin once in two weeks.',
    'Ideal shower water temperature is lukewarm. But it is best to keep water below 110 degrees.',
    'Using too many producst for your daily moisturizing routine may leave excessive remaining on your skin which may cause breakouts.',
    'Never go to bed without cleasing your make up. While asleep, make up residue can clog your pores and lead to break outs.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
