namespace ai_for_health.Model;

public class Notification
{
    public int Id { get; set; }
    public TimeOnly Timestamp { get; set; }
    public string Title { get; set; }
    public string Status { get; set; }

}