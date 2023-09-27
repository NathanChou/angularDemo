using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore;

public class MeetingRoom {

    public int ID { get; set; }
    [Column(TypeName = "nvarchar(30)")]

    public string Name { get; set; }
    public int Size { get; set; }
    public bool? Projector { get; set; }
    public bool? TV { get; set; }

}


public class MeetingRoomContext: DbContext {
    public MeetingRoomContext(DbContextOptions<MeetingRoomContext> options):base(options)
    {}

    public DbSet<MeetingRoom> MeetingRooms { get; set; }
}