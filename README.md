# ElderElevation: A Social Hobbies-based Platform for the Elderly

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)



## Description
ElderElevation aims to provide the elderly with a platform catering to their social requirements. These include social networking, leisure activities, and caregiver support and resources. Among the sections this platform will have include social networking, hobby and leisure activities recommendations, and caregiver support and resources. The project is anticipated to result in better social networks for senior citizens as the overall goal is to lessen the effects of social isolation and support seniors’ overall well-being by making accessible tools available and fostering community relationships.


## Project Setup
### Requirements

Before you begin, ensure you have the following installed on your machine:
- **Node.js**: JavaScript runtime environment.
- **npm** (Node Package Manager): Package manager for Node.js, used to install project dependencies.

### Dependencies
The system requires the following libraries, packages, and frameworks:
- *Javascript* - Programming language (https://devdocs.io/javascript)
- *React* - A JavaScript library for building user interfaces (https://reactnative.dev)
- *Next.js* - A React framework that enables server-side rendering and static site generation (https://nextjs.org/docs)
- *HTML* - Markup language for structuring web pages
- *CSS* - Styling for web pages (using TailwindCSS)
- *MongoDB* - Database management system (https://www.mongodb.com/docs/)

### Installation Steps
1. Clone the repository into a directory of your choice:
   ```bash
   git clone https://github.com/fancykariuki/ElderElevation.git
   cd elderelevation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Create a virtual environment and run the development server:
   ```bash
   npm run dev
   ```
   
## Usage Instructions
### How to Run
Ensure the virtual environment is setup.
Run the server:
```bash
   npm run dev
   ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Input/Output
Input- User details,group requests,caregiver request

Output- Group confirmation, Caregiver confirmation

## Project Structure
### Overview

This project is organized into the following main folders and their contents:

 **Source Folder**
```
C:.
|   .env
|   .gitignore
|   README.md
|   requirements.txt
|   tree_structure.txt
 +---src
    +---app
    ¦   +---aboutUs
    ¦   +---admin
    ¦   ¦   +---caregivers
    ¦   ¦   ¦   +---all        
    ¦   ¦   +---dashboard  
    ¦   ¦   ¦   +---displayDetails
    ¦   ¦   ¦   ¦   +---caregiversDisplay
    ¦   ¦   ¦   ¦   +---contactDisplay
    ¦   ¦   ¦   ¦   +---groupsDisplay
    ¦   ¦   ¦   ¦   +---usersDisplay
    ¦   ¦   ¦   +---groupAccORejPie
    ¦   ¦   +---groups
    ¦   ¦       +---all
    ¦   ¦       +---rejected
    ¦   +---api
    ¦   ¦   +---adminCaregivers
    ¦   ¦   +---allGroups
    ¦   ¦   +---allGroupsDisplay
    ¦   ¦   +---allUsersDisplay    
    ¦   ¦   +---auth
    ¦   ¦   +---caregiver
    ¦   ¦   +---caregiverPi
    ¦   ¦   +---caregivers
    ¦   ¦   +---caregiversStatusPie
    ¦   ¦   +---category
    ¦   ¦   +---contact
    ¦   ¦   +---forget
    ¦   ¦   +---group
    ¦   ¦   +---joinGroup
    ¦   ¦   +---profile
    ¦   ¦   +---register
    ¦   ¦   +---rejectedGroups         
    ¦   +---caregiver
    ¦   +---categories
    ¦   +---contact
    ¦   +---groups
    ¦   +---locked
    ¦   +---login
    ¦   +---models
    ¦   +---profile
    ¦   +---register              
    +---components
        ¦   AppContext.js
        ¦   SessionLock.js
        ¦   UseProfile.js
        ¦   
        +---icons
        +---layout
            +---Hero
                    Hero.js
                    Hero.module.css
```
* File tree generated using command `tree /F /A > tree_structure.txt`


#### Main Files and Their Roles

- `README.md`: Documentation file providing project overview and instructions.
- `app/about us/`: Files related to the "About Us" section of the application.
- `app/admin/`
  - `caregivers/`: Files related to caregiver management.
  - `dashboard/`: Files related to the admin dashboard.
  - `groups/`: Files related to group management within the admin section.
- `app/api/`: API-related files for backend communication.
- `app/caregivers/`: Files related to caregiver functionalities.
- `app/categories/`: Files related to categorization features.
- `app/contacts/`: Files related to managing contacts.
- `app/login/`: Files related to user authentication and login.
- `app/profile/`: Files related to user profiles.
- `app/register/`: Files related to user registration.


## Additional Sections
### Project Status
Pending

### Known Issues
None at the moment

### Acknowledgements
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


