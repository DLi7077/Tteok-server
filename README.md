### uncollapse route to see request / response

## User Routes

### GET `user/all` retrieves all users's username, pfp, and descrption

### sample output: get a list of all users

<details>
<summary><code> http://localhost:8000/api/user/all</code> </summary>

```js
// response output
{
  users: [
    {
      username: "FBI Agent",
      profile_picture_url: null,
      description: ""
    },
    {
      username: "Butterriolu",
      profile_picture_url: "https://storage.googleapis.com/katsudon-assets/user-profiles/6306b34920cf5f80f7d0c20d/pfp.jpg",
      description: ""
    },
    ...
  ]
}
```

</details>
<br>

### GET `user/profile/:user_id` retrieves a users's profile info

### sample output: fetch for user 1's info

<details>
<summary><code> http://localhost:8000/api/user/profile/1</code> </summary>

```js
// response output
{
  profile: {
    id: 1,
    username: "Butterriolu",
    profile_picture_url: null,
    portfolio_url: "https://dli7077.github.io/portfolio/",
    description: "",
  },
  current_resume: {
    post: {
      id: 1,
      resume_url:
        "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf",
    },
    comments: [
      {
        comment: "Pretty good",
        likes: 0,
        user_id: 2,
        createdAt: "2022-11-13T06:31:19.348Z",
        username: "FBI Agent",
        profile_picture_url: null,
      },
      {
        comment: "Double columns is a sin",
        likes: 0,
        user_id: 2,
        createdAt: "2022-11-13T06:31:19.348Z",
        username: "FBI Agent",
        profile_picture_url: null,
      },
    ],
  },
  work_experiences: [
    {
      company: "CUNY Hunter College",
      job_title: "UTA",
      start_month: 8,
      start_year: 2022,
      end_month: null,
      end_year: null,
      bullets: [
        "Did this and that while providing something else which lead to a quantifyable change of X percent",
        "The fitness gram pacer test is a multi-aerobic capacity test that progressively gets more difficult as it continues",
      ],
      tools_used: ["C++"],
    },
    {
      company: "The Golden House",
      job_title: "Full Stack Engineer",
      start_month: 2,
      start_year: 2022,
      end_month: null,
      end_year: null,
      bullets: [
        "Engineered a full stack application to host a leaderboard displaying the achievements of 800+ users",
        "Designed scalable MongoDB schemas to accurately store user entries and character records",
        "Implemented REST APIs using Mongoose queries for data retrieval and automated user submissions",
        "Built a data migration script to migrate 700+ entries from TablePress spreadsheets into production",
        "Created an approval table to allow our moderation team to approve and modify submissions 5 times faster",
        "Performed a database backfill to reduce the runtime of an aggregation query by ~60%",
      ],
      tools_used: ["TypeScript", "JavaScript", "NodeJS", "MongoDB", "ReactJS"],
    },
  ],
  projects: [
    {
      brief: "Full stack website",
      job_title: null,
      start_month: 8,
      start_year: 2022,
      end_month: null,
      end_year: null,
      bullets: [
        "Engineered a social platform for users to compare LeetCode solutions with friends",
        "Built a server and utilizing Mongoose aggregation queries, and an user interface using ReactJS and CSS",
        "Created and published a chrome extension to automate solution submissions for authorized users",
      ],
      tools_used: ["TypeScript", "JavaScript", "NodeJS", "MongoDB", "ReactJS"],
    },
    {
      brief: "Website",
      job_title: null,
      start_month: 8,
      start_year: 2021,
      end_month: 10,
      end_year: 2021,
      bullets: [
        "Built an alternative damage calculator that estimates a characters' damage with less needed information",
        "Allowed a small community to accurately predict their characters' damage consistently within 99.5% accuracy",
        "Helped over 600 players decide on the value of an unreleased character by analyzing survey data",
        "Set the community standard for a character's damage by generating all ways their stats could be optimized",
      ],
      tools_used: ["HTML", "JavaScript", "CSS"],
    },
  ],
}
```

</details>

<br>

### POST `user/create` registers a user

### sample output: create a user by passing info to `req.body`

<details>
<summary><code> http://localhost:8000/api/user/create </code> </summary>

```js
// request body
{
  password:"dude",
  email:"dude@fakemail.com",
  password:"dudepassword"
}

// response body
{
  user: {
    id: 3,
    username: null,
    email: "dude@fakemail.com",
    profile_picture_url: null,
    portfolio_url: null,
    description: null,
    active_resume: null
  }
}
```

</details>

<br>

### POST `user/login` handles user login and provides a jwt token for authorization

### sample output: login and retrieve `accessToken` to unlock permissions like:

comment, update profile, and adding projects

<details>
<summary><code> http://localhost:8000/api/user/create </code> </summary>

```js
// request body
{
  "email": "butterriolu@fakemail.com",
  "password": "butterriolupassword"
}

// response body
{
  "user": {
    "id": 1,
    "username": "Butterriolu",
    "email": "butterriolu@fakemail.com",
    "profile_picture_url": null,
    "portfolio_url": "https://dli7077.github.io/portfolio/",
    "active_resume": 1,
    "description": "",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1dHRlcnJpb2x1QGZha2VtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2NjgzMjQ5ODd9.bgX1PJCSRrA132U2h-oGoTbUEHMGuEhVapAjYwcm1Q4"
  }
}
```

</details>

<br>

## Using <code> accessToken</code> with Postman

In any route that requires an accessToken:

<ol>
  <li>Auth</li>
  <li>Type-> Bearer Token</li>
  <li>insert <code>accessToken</code> into Token text field</li>
  <li>Send the request</li>
  <li>If the request responds with Forbidden (401) or similar, then your accessToken is invalid. <br>Login again to get a new token</li>
</ol>

<br>

## Work Experience Routes

### POST `work-exp/create` creates a work experience

**_requires access token_**

<details>
<summary><code> http://localhost:8000/api/work-exp/create</code> </summary>

```js
// request body
{
  work_experience: {
    company: "CUNY Hunter College",
    job_title: "UTA",
    start_month: 8,
    start_year: 2022,
    end_month: null,
    end_year: null,
    bullets: [
      "Did this and that while providing something else which lead to a quantifyable change of X percent",
      "The fitness gram pacer test is a multi-aerobic capacity test that progressively gets more difficult as it continues",
    ],
    tools_used: ["C++"],
  }
}

// response body
{
  id: 6, // work experience id
  user_id: 1,
  company: "CUNY Hunter College",
  job_title: "UTA",
  start_month: 8,
  start_year: 2022,
  end_month: null,
  end_year: null,
  bullets: [
    "Did this and that while providing something else which lead to a quantifyable change of X percent",
    "The fitness gram pacer test is a multi-aerobic capacity test that progressively gets more difficult as it continues",
  ],
  tools_used: ["C++"],
  createdAt: "2022-11-13T07:54:03.010Z",
}
```

</details>
<br>

## Project Routes

### POST `project/create` creates a project

**_requires access token_**

<details>
<summary><code> http://localhost:8000/api/project/create</code> </summary>

```js
// request body
{
  project: {
    user_id: 1,
    title: "Katsudon Leetcode",
    brief: "Full stack website",
    start_month: 8,
    start_year: 2022,
    end_month: null,
    end_year: null,
    bullets: [
      "Engineered a social platform for users to compare LeetCode solutions with friends",
      "Built a server and utilizing Mongoose aggregation queries, and an user interface using ReactJS and CSS",
      "Created and published a chrome extension to automate solution submissions for authorized users",
    ],
    tools_used: ["TypeScript", "JavaScript", "NodeJS", "MongoDB", "ReactJS"],
  },
};

// response body
{
  id: 4,
  user_id: 1,
  brief: "Full stack website",
  start_month: 8,
  start_year: 2022,
  end_month: null,
  end_year: null,
  bullets: [
    "Engineered a social platform for users to compare LeetCode solutions with friends",
    "Built a server and utilizing Mongoose aggregation queries, and an user interface using ReactJS and CSS",
    "Created and published a chrome extension to automate solution submissions for authorized users",
  ],
  tools_used: ["TypeScript", "JavaScript", "NodeJS", "MongoDB", "ReactJS"],
  createdAt: "2022-11-13T07:55:57.763Z",
}
```

</details>
<br>

## Resume Routes

### POST `resume/create-post` creates a resume post, and updates the currentUser's active_resume id

**_requires access token_**

<details>
<summary><code> http://localhost:8000/api/resume/create-post</code> </summary>

```js
// request body
{
  resume_url: "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf"
}

// response body
{
  id: 3,
  user_id: 1,
  resume_url: "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf",
  createdAt: "2022-11-13T08:10:01.801Z"
}
```

</details>

<br>

### POST `resume/create-comment` creates a comment to a resume post

**_requires access token_**

<details>
<summary><code> http://localhost:8000/api/resume/create-comment</code> </summary>

```js
// request body
{
  resume_post_id: 1, // must be a valid resume_post id, can be retrieved from a resume post
  comment: "Constructive feedback"
}

// response body
{
  likes: 0,
  reply_to: null,
  id: 7,
  user_id: 1,
  resume_post_id: 1,
  comment: "Constructive feedback",
  createdAt: "2022-11-13T08:16:37.384Z"
}
```

</details>
