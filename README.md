# SMB WEB PORTAL PROJECT

Welcome to the SMB repository! This document outlines how to get started and the steps to create a pull request (PR).

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14+ recommended)
- **Git** for version control
- **npm** or **yarn** for managing dependencies

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/project-name.git
    ```

2. Navigate into the project directory:
    ```bash
    cd project-name
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```
    OR
    ```bash
    yarn install
    ```

### Running the App

To start the app in development mode, run the following command:
```bash
npm run dev
```
This will start the server, and you can view the app in your browser at [http://localhost:3000](http://localhost:3000).

To build the app for production:
```bash
npm run build
```
This will generate a production-ready build in the `build/` directory.

## Pull Request Process

We follow a structured pull request process to ensure quality and collaboration.

### Steps to Open a Pull Request

1. **Create a Branch**: Before starting your work, create a new branch from `dev`:
    ```bash
    git checkout dev
    git checkout -b feature/your-feature-name
    ```

2. **Work on the Feature**: Make your changes in the newly created branch.

3. **Push Changes**: Once your changes are complete, push them to your remote repository:
    ```bash
    git add .
    git commit -m "Describe your changes"
    git push origin feature/your-feature-name
    ```

4. **Open the Pull Request**: Navigate to the Pull Requests section of the repository and click `New Pull Request`. Make sure you're comparing your feature branch against the `dev` branch.

5. **Add a Description**: Include a clear title and description in your PR, summarizing the changes you've made.

6. **Submit for Review**: Once submitted, at least one reviewer must approve your PR before it can be merged.

### Branch Protection Rules

- **main branch**: Direct commits are restricted; all changes must go through a pull request.
- **dev branch**: Merge your changes here first after review. This branch is the latest working version.
