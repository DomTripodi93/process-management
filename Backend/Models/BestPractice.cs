namespace Backend.Models
{
    public class BestPractice
    {
        public int Id { get; set; }
        public User User { get; set; }
        public int userId { get; set; }
        public Step Step { get; set; }
        public string stepNumber { get; set; }
        public string objectiveName { get; set; }
        public string deptName { get; set; }
        public string Method { get; set; }
        public string Objective { get; set; }
        
    }
}