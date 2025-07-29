# AI-For-Health

AI-For-Health application is an application that has a chatbot interface that allows users input their symptoms & uses an AI model to suggest possible conditions and advice. The advice follows up with which Momentum Insurance Plan the user can take out to help cover themselves & immediate family.

## Development Stack Used & Why

We chose ASP.NET Core & React for our stack. It was our first choice as to how easy and minimal ASP.NET Core allows users to create API endpoints with the flexibility to add security features by just updating you middleware. 


Under the hood for our database we used Microsoft SQL Server & Entity Framework for our ORM. It works well with ASP.NET Core since it's part of one family, so continuity between the technologies made it an easy choice.


We chose React as it's easy to scaffold user interfaces with just JSX syntax. It's also one of the most used frameworks in the world for its ease of use.

## Set Up / Tools

1. You need to have an IDE, preferrably [Visual Studio](https://visualstudio.microsoft.com/) & [Visual Studio Code](https://code.visualstudio.com/).
1. You need to install the EF Core Tools. ```dotnet tool install --global dotnet-ef```
1. Make sure you have [Node.js](https://nodejs.org/en) installed in your machine. I would say also check if you have [.NET](https://dotnet.microsoft.com/en-us/) but it comes preinstalled when you download Visual Studio.
1. You also need to install [Microsoft SQL Server](https://www.sqlservertutorial.net/)
1. You need [Git](https://git-scm.com/).

## Installation & Running the Application

1. Clone the repository into your local machine
```
git clone https://www.github.com/inalelub/ai-for-health
```
1. The repository has a folder called ```frontend```.  Move this folder somewhere outside the repository, either to your Desktop folder. 

1. Open the ```frontend``` folder using Visual Studio Code.

1. In the root directory of the ```frontend``` code, run this command ```npm run dev``` to see the frontend.

1. In your ```ai-for-health``` repository that you cloned, open the project using Visual Studio.

1. Navigate to the root of the project where the ```.csproj``` file is located. Run the following command to load the migrations with the seeded data ```dotnet ef database update```.

1. Once the project is opened. Open the terminal & run these commands or you simply click the ```F5``` to run the application;

```
dotnet run
```
