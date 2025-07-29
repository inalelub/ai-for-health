using System.ComponentModel.DataAnnotations;

namespace ai_for_health.Model;

public class DiagnosticTest
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Result { get; set; }
    public DateOnly Date { get; set; }
        
}