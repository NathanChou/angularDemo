dotnet add package Microsoft.EntityFrameworkCore 
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Design  


dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet tool install -g dotnet-aspnet-codegenerator 


dotnet aspnet-codegenerator controller -name MeetingRoomsController -async -api -m MeetingRoom -dc MeetingRoomContext -outDir Controllers

