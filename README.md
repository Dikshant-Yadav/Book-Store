
# Book Store

This is a full-stack Book Store application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to add, edit, delete, and view details of books.

## Features

- **Add Books**: Users can add new books to the store.
- **Edit Books**: Users can edit the details of existing books.
- **Delete Books**: Users can delete books from the store.
- **View Books**: Users can view the list of books in either a table or card format.
- **Book Details**: Users can view detailed information about each book.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Prerequisites

- Node.js
- MongoDB

## Installation

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/yourusername/book-store.git
   cd book-store
   \`\`\`

2. **Install dependencies**

   Since the \`node_modules\` folder is not included in the repository, you need to install the dependencies using npm:

   \`\`\`bash
   npm install
   \`\`\`

3. **Setup MongoDB**

   Make sure you have MongoDB installed and running. You can download MongoDB from [here](https://www.mongodb.com/try/download/community).

   Create a \`.env\` file in the root directory and add the following:

   \`\`\`
   MONGO_URI=your_mongodb_connection_string
   \`\`\`

   Replace \`your_mongodb_connection_string\` with your actual MongoDB connection string.

4. **Run the server**

   \`\`\`bash
   npm start
   \`\`\`

5. **Run the client**

   Open a new terminal and navigate to the client directory:

   \`\`\`bash
   cd client
   npm install
   npm start
   \`\`\`

   The client will start on \`http://localhost:3000\` and the server will start on \`http://localhost:5555\`.

## Usage

- **View Books**: Navigate to the homepage to see the list of books.
- **Add Book**: Click on the "Add Book" button to add a new book.
- **Edit Book**: Click on the "Edit" icon next to a book to edit its details.
- **Delete Book**: Click on the "Delete" icon next to a book to delete it.
- **Book Details**: Click on the "Info" icon next to a book to view its details.



## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


