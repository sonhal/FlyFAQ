using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
    public class QADBInitialize : DropCreateDatabaseAlways<QADBContext>
    {
        protected override void Seed(QADBContext context)
        {

            var db = new DB();
            List<Question> allQuestions = new List<Question>();

            allQuestions.Add(new Question
            {
                id = 1,
                body = "Hvordan endrer jeg tlf nummer på ordren min?",
                answer = new Answer
                {
                    id = 1,
                    body = "Send oss referanse nummeret ditt på epost til så ordner vi det"
                }
            });
            allQuestions.Add(new Question
            {
                id = 2,
                body = "Bagasjen min dukket ikke opp ved destinasjonen, hva gjør jeg?",
                answer = new Answer
                {
                    id = 2,
                    body = "Ring oss på kunde telefon nummeret så skal vi ordne det"
                }
            });
            allQuestions.Add(new Question
            {
                id = 3,
                body = "Flyet er forsinket",
                answer = new Answer
                {
                    id = 3,
                    body = "Vi vil sende deg oppdateringer på nummeret du har oppgitt om flyruten din"
                }
            });



            context.Answers.Add(new Answer
            {
                id = 2,
                body = "Answer 2"
            });
            

            foreach (Question q in allQuestions)
            {
                context.Questions.Add(q);
            }
            context.SaveChanges();
            base.Seed(context);
        }
    }
}