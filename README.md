# Instagram API Viewer
![api](https://github.com/user-attachments/assets/f05f0d29-4d5a-4a96-8e70-eb381441574c)

This project is a simple React application that fetches data from a placeholder API simulating Instagram posts and displays them in a visually appealing grid format.

## Features
- Fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/photos).
- Displays the first 10 posts in a grid layout.
- Shows a thumbnail image and title for each post.
- Handles errors gracefully by displaying an error message if the API fails.

## Technologies Used
- **React**: For building the user interface.
- **TypeScript**: For adding type safety and improving code maintainability.
- **CSS** (Inline styles): For layout and styling.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Code Explanation

### State Management
- `fetchPosts`: Stores the fetched posts.
- `error`: Stores any error messages during the API call.

### API Fetching
The `useEffect` hook fetches data from the JSONPlaceholder API when the component mounts. It limits the data to the first 10 posts using `.slice(0, 10)`.

### Grid Layout
The images are displayed in a responsive grid using the CSS `grid-template-columns` property. Each image has a title below it for additional context.

### Error Handling
If the API request fails, an error message is displayed in red.

## Example Response from API
Each post fetched from the API has the following structure:
```json
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```

## Known Issues
- The app does not implement pagination.
- Styling could be improved by using an external CSS file or a CSS framework like TailwindCSS.

## Future Improvements
- Add pagination to load more posts.
- Implement a modal to view the full-size image when a thumbnail is clicked.
- Use a real Instagram API or similar service for production-grade applications.

## Contributing
Feel free to submit issues or pull requests if you'd like to improve this project.
