let questionnaire = 
{
  "key": "family",
  "type": "operator-questionnaire",
  "title": {
      "en": "Existential questions",
      "ka": "აბა ბიჭებო, გავედით საჭმელად"
  },
  "description": "Question descriptions",
  "questions": [
      {
          "type": "boolean",
          "title": {
              "en": "Are you ok?",
              "ka": "ჰო კარგად ხარ?"
          },
          "key": "are-you-ok-boolean",
          "answer": true,
          "mandatory" : true
      },
      {
          "type": "string",
          "title": "Are you ok?",
          "key": "are-you-ok-string",
          "mandatory" : true
      },
      {
          "type": "options",
          "title": "Are you ok?",
          "key": "are-you-ok-options",
          "options": [
              {
                  "title": {
                      "en": "Yes",
                      "ka": "კი"
                  },
                  "key": "are-you-ok-options_yes"
              },
              {
                  "title": {
                      "en": "No",
                      "ka": "არა"
                  },
                  "key": "are-you-ok-options_no"
              }
          ],
          "answer": "are-you-ok-options_yes"
      },
      {
          "type": "multiple-choice",
          "title": "Please select the types of documents",
          "key": "select-document-types",
          "options": [
              {
                  "title": {
                      "en": "ID card",
                      "ka": "ID ბარათი"
                  },
                  "key": "id-card"
              },
              {
                  "title": {
                      "en": "Passport",
                      "ka": "პასპორტი"
                  },
                  "key": "passport"
              },
              {
                  "title": {
                      "en": "Driving licence",
                      "ka": "მართვის მოწმობა"
                  },
                  "key": "driving-licence"
              },
              {
                  "title": {
                      "en": "Other",
                      "ka": "სხვა"
                  },
                  "key": "other"
              }
          ],
          "answer": [
              "id-card",
              "driving-licence"
          ]
      }
  ],
  "status": "approved"
}

  module.exports = { questionnaire }