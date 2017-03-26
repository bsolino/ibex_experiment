var shuffleSequence = seq(
    "intro",
    "survey",
    sepWith(
        "word_sep",
        seq(
            // Practice
            "practice_instructions",
            randomize("practice_practice"),
            "practice_distraction",
            "test_practice",
            "practice_conclusion",

            // Trial 1
            randomize(
                shuffle("trial_1_female","trial_1_male","trial_1_neutral")
            ),
            "distraction_1",
            "test_1",

            // Trial 2
            randomize(
                shuffle("trial_2_female","trial_2_male","trial_2_neutral")
            ),
            "distraction_2",
            "test_2"
        )
    ),
    "send_results",
    "conclusion"
);
var practiceItemTypes = ["practice_instructions", "practice_practice", "practice_distraction", "test_practice"];
var manualSendResults = true;

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait.",
        errorMessage: "Wrong. Please wait."
    },
    "AcceptabilityJudgment", {
        hideProgressBar: true,
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Not at all)", rightComment: "(Very much)"
    },
    "Question", {
        as: [["y","Yes"], ["n","No"]]
    },
    "Message", {
        hideProgressBar: true,
        transfer: 5000
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: false
    }
];

var items = [

    ["word_sep", "Separator", {
        hideProgressBar: true,
        transfer: 1000,
        normalMessage: "Please wait.",
        errorMessage: "Wrong. Please wait."
    }],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


    //
    // Survey about gender issues
    //

    ["survey", "AcceptabilityJudgment", {
        s: "How much do you feel you act in accordance with feminine stereotypes?"}],

    ["survey", "AcceptabilityJudgment", {
        s: "How much do you feel you act in accordance with masculine stereotypes?"}],


    //
    // Practice messages
    //

    ["practice_instructions", "Message", {
        transfer: "click",
        html: "<div style=\"width: 40em;\">" +
          "<p style=\"text-align: justified;\">" +
          // Practice message both conditions
          "Thank you for participating in our study.<br/>" +
          "First we will explain what you will be doing; afterwards, you get a short practice round before the study begins." +
          "</p>" +
          "</div>"
    }],


    [["practice_instructions", 9000], "Message", {
        transfer: "click",
        html: "<div style=\"width: 40em;\">" +
          "<p style=\"text-align: justified;\">" +
          // Practice message Experiment group
          "You will see words pop up on a screen.<br/>" +
          "During this time and before the next word shows up, you will be asked to think about a word you associate with the presented word.<br/>" +
          "Following the words you will be asked to solve some simple math problems (remember PEMDAS – parentheses, exponents, multiplication, division, addition, subtraction).<br/>" +
          "Finally, you will be asked a couple follow-up questions." +
          "</p>" +
          "</div>"
    }],

    [["practice_instructions", 9000], "Message", {
        transfer: "click",
        html: "<div style=\"width: 40em;\">" +
          "<p style=\"text-align: justified;\">" +
          // Practice message Control group
          "You will see words pop up on a screen.<br/>" +
          "Pay close attention to these presented words.<br/>" +
          "Following the words you will be asked to solve some simple math problems (remember PEMDAS – parentheses, exponents, multiplication, division, addition, subtraction).<br/>" +
          "Finally, you will be asked a couple follow-up questions." +
          "</p>" +
          "</div>"
    }],

    ["practice_instructions", "Message", {
        transfer: "click",
        html: "<div style=\"width: 40em;\">" +
          "<p style=\"text-align: justified;\">" +
          // Practice message both conditions
          "Now let’s move onto the practice round." +
          "</p>" +
          "</div>"
    }],

    ["practice_conclusion", "Message", {
        transfer: "click",
        html: "<div style=\"width: 40em;\">" +
          "<p style=\"text-align: justified;\">" +
          // Practice message both conditions
          "Now that you know what to do, we will begin with the experiment." +
          "</p>" +
          "</div>"
    }],


    //
    // Final message
    //
    ["conclusion", "Message", {
        transfer: null,
        html: "<p>TODO: CONCLUSION</p>"}], // TODO



    //
    // Practice words
    //
    [["practice_practice",9901],"Message",{html:"eat"}],
    [["practice_practice",9901],"Message",{html:"eat"},
        "Message", {html: {include: "write_similar.html"}}],
    [["practice_practice",9902],"Message",{html:"walk"},
        "Message", {html: {include: "write_similar.html"}}],
    [["practice_practice",9902],"Message",{html:"walk"}],
    [["practice_practice",9903],"Message",{html:"read"}],
    [["practice_practice",9903],"Message",{html:"read"},
        "Message", {html: {include: "write_similar.html"}}],
    [["practice_practice",9904],"Message",{html:"play"},
        "Message", {html: {include: "write_similar.html"}}],
    [["practice_practice",9904],"Message",{html:"play"}],

    ["test_practice", "Form", {
        html: { include: "test_practice.html" },
        validators: {}
    }],


    //
    // Trial 1 - Female
    //

    [["trial_1_female",1101],"Message",{html:"maternal"}],
    [["trial_1_female",1101],"Message",{html:"maternal"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_female",1102],"Message",{html:"doll"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_female",1102],"Message",{html:"doll"}],

    [["trial_1_female",1103],"Message",{html:"makeup"}],
    [["trial_1_female",1103],"Message",{html:"makeup"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_female",1104],"Message",{html:"petite"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_female",1104],"Message",{html:"petite"}],

    [["trial_1_female",1105],"Message",{html:"manicure"}],
    [["trial_1_female",1105],"Message",{html:"manicure"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_female",1106],"Message",{html:"nurse"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_female",1106],"Message",{html:"nurse"}],


    //
    // Trial 1 - Male
    //

    [["trial_1_male",1201],"Message",{html:"handsome"}],
    [["trial_1_male",1201],"Message",{html:"handsome"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_male",1202],"Message",{html:"professor"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_male",1202],"Message",{html:"professor"}],

    [["trial_1_male",1203],"Message",{html:"priest"}],
    [["trial_1_male",1203],"Message",{html:"priest"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_male",1204],"Message",{html:"muscular"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_male",1204],"Message",{html:"muscular"}],

    [["trial_1_male",1205],"Message",{html:"cigars"}],
    [["trial_1_male",1205],"Message",{html:"cigars"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_male",1206],"Message",{html:"aggressive"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_male",1206],"Message",{html:"aggressive"}],


    //
    // Trial 1 - Neutral
    //

    [["trial_1_neutral",1301],"Message",{html:"coffee"}],
    [["trial_1_neutral",1301],"Message",{html:"coffee"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_neutral",1302],"Message",{html:"funny"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_neutral",1302],"Message",{html:"funny"}],

    [["trial_1_neutral",1303],"Message",{html:"job"}],
    [["trial_1_neutral",1303],"Message",{html:"job"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_neutral",1304],"Message",{html:"wage"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_neutral",1304],"Message",{html:"wage"}],

    [["trial_1_neutral",1305],"Message",{html:"happy"}],
    [["trial_1_neutral",1305],"Message",{html:"happy"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_1_neutral",1306],"Message",{html:"beach"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_1_neutral",1306],"Message",{html:"beach"}],


    //
    // Trial 2 - Female
    //

    [["trial_2_female",2101],"Message",{html:"ballerina"}],
    [["trial_2_female",2101],"Message",{html:"ballerina"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_female",2102],"Message",{html:"pretty"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_female",2102],"Message",{html:"pretty"}],

    [["trial_2_female",2103],"Message",{html:"emotional"}],
    [["trial_2_female",2103],"Message",{html:"emotional"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_female",2104],"Message",{html:"pink"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_female",2104],"Message",{html:"pink"}],

    [["trial_2_female",2105],"Message",{html:"understanding"}],
    [["trial_2_female",2105],"Message",{html:"understanding"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_female",2106],"Message",{html:"sympathetic"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_female",2106],"Message",{html:"sympathetic"}],


    //
    // Trial 2 - Male
    //

    [["trial_2_male",2201],"Message",{html:"beard"}],
    [["trial_2_male",2201],"Message",{html:"beard"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_male",2202],"Message",{html:"violent"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_male",2202],"Message",{html:"violent"}],

    [["trial_2_male",2203],"Message",{html:"boxing"}],
    [["trial_2_male",2203],"Message",{html:"boxing"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_male",2204],"Message",{html:"competitive"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_male",2204],"Message",{html:"competitive"}],

    [["trial_2_male",2205],"Message",{html:"plumber"}],
    [["trial_2_male",2205],"Message",{html:"plumber"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_male",2206],"Message",{html:"rebellious"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_male",2206],"Message",{html:"rebellious"}],


    //
    // Trial 2 - Neutral
    //

    [["trial_2_neutral",2301],"Message",{html:"coat"}],
    [["trial_2_neutral",2301],"Message",{html:"coat"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_neutral",2302],"Message",{html:"quick"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_neutral",2302],"Message",{html:"quick"}],

    [["trial_2_neutral",2303],"Message",{html:"bicycle"}],
    [["trial_2_neutral",2303],"Message",{html:"bicycle"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_neutral",2304],"Message",{html:"tasteless"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_neutral",2304],"Message",{html:"tasteless"}],

    [["trial_2_neutral",2305],"Message",{html:"ethical"}],
    [["trial_2_neutral",2305],"Message",{html:"ethical"},
        "Message", {html: {include: "write_similar.html"}}],

    [["trial_2_neutral",2306],"Message",{html:"messy"},
        "Message", {html: {include: "write_similar.html"}}],
    [["trial_2_neutral",2306],"Message",{html:"messy"}],



    //
    // Distraction practice
    //

    ["practice_distraction", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "2 + 5" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {}
    }],

    ["practice_distraction", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "3 x 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {}
    }],

    ["practice_distraction", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "9 - 6" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {}
    }],

    ["practice_distraction", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "4 / 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {}
    }],



    //
    // Distraction task 1
    //

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(2 + 8) / 4" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {}
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "3 + 7 x 3" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(5 – 2) x 6" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "20 – 10 x 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "6 / 3 + 18" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "5 – 7 + 12" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "16 / (4 + 12)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "9 + 3 / 6" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "30 / 5 x 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "9 + 17 – 6" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "2 + (8/4)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(3 + 7) x 3" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "5 – (2 x 6)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(20 – 10) x 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "6 / (3 + 18)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "5 + 7 – 12" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "16 / 4 + 12" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(9 + 3) / 6" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "30 / (5 x 2)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_1", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "9 – 17 + 6" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],


    //
    // Distraction task 2
    //

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "7 + 8 / 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "17 + 8 - 19" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "7 / 3 + 4" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "19 – 9 / 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "24 / 3 -2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "14 – 5 + 21" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "3 + 9 / 3" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "10 + 12 / 4" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "8 + 20 / 5" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "6 / 3 + 9" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(7 + 8) / 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "17 – 8 + 19" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "7 / (3 + 4)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(19 - 9) / 2" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "24 / (3-2)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "14 + 5 – 21" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(3 + 9) / 3" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "(10 + 12) / 4" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "( 8 + 20) / 5" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],

    ["distraction_2", "Form",{
      html: "<div style=\"width: 40em;\">" +
        "<p style=\"text-align: left;\">" +
        "6 / (3 + 9)" +
        " = <input name=\"result\" id=\"result\" type=\"text\" class=\"obligatory\" size=\"6\" /><br/>" +
        "<label class=\"error\" for=\"result\" />" +
        "</p>" +
        "</div>",
      validators: {
          result: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018result\u2019"; }
      }
    }],




    //
    // Test
    //
    [["test_1",4001], "Form", {
        html: { include: "trial1-test01.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test02.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test03.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test04.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test05.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test06.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test07.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test08.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test09.html" },
        validators: {
        }
    }],
    [["test_1",4001], "Form", {
        html: { include: "trial1-test10.html" },
        validators: {
        }
    }],


    [["test_2",4002], "Form", {
        html: { include: "trial2-test01.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test02.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test03.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test04.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test05.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test06.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test07.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test08.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test09.html" },
        validators: {
        }
    }],
    [["test_2",4002], "Form", {
        html: { include: "trial2-test10.html" },
        validators: {
        }
    }],










    ["send_results", "__SendResults__", { }]// NO COMMA HERE
];
