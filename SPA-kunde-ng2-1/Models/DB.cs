using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Web;
using System.Data.Entity.Core.EntityClient;
using System.Data.Common;

namespace SPA_kunde_ng2.Models
{
    public class DB
    {
        QADBContext db = new QADBContext();
        public List<Question> getAllQuestions()
        {
            
                List<Question> allQuestions = (from q in db.Questions
                                         select q).ToList();
              
              /*
                List<ViewModelQuestion> allQ = db.Questions.Select(k => new ViewModelQuestion()
                {
                    id = k.id,
                    body = k.body,
                    email = k.email,
                    answer = k.answer.body
                }).ToList();
            */

                return allQuestions;
        }

        public List<CustomerQuestion> getAllCustomerQuestions()
        {

            List<CustomerQuestion> allQuestions = (from q in db.CustomerQuestions
                                           select q).ToList();

            /*
              List<ViewModelQuestion> allQ = db.Questions.Select(k => new ViewModelQuestion()
              {
                  id = k.id,
                  body = k.body,
                  email = k.email,
                  answer = k.answer.body
              }).ToList();
          */

            return allQuestions;
        }

        public bool SaveCustomerQuestion(ViewModelQuestion customerQuestion)
        {
            var newQuestion = new CustomerQuestion
            {
                body = customerQuestion.body,
                email = customerQuestion.email
            };

           
            try
            {
                // lagre kunden
                db.CustomerQuestions.Add(newQuestion);
                db.SaveChanges();
            }
            catch (Exception feil)
            {
                return false;
            }
            return true;
        }

    }

        

    
}
