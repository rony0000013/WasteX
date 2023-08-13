# WasteX
WasteX is a solution to address the challenge of improper waste disposal. The system employs advanced technologies to detect garbage in images and records the locations where it's found. This project aims to create a cleaner and healthier environment by encouraging proper waste management practices.

## Tech Stack 🌐
The system is built using the following technologies:

FastAPI: A modern, fast, web framework for building APIs with Python 3.7+.
MongoDB: A NoSQL database for storing structured data.
Hugging Face API: An AI research company's API used for image detection.
Vite: A build tool that provides a highly efficient development workflow for front-end projects.
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for creating responsive and efficient designs.
Streamlit: It is used to make the chat app in our website.

## Challenges Faced 💪
1. Improper Waste Disposal: The core challenge was addressing the issue of improper waste disposal that contributes to environmental pollution.

2. Image Detection: Developing an accurate garbage detection system using the Hugging Face API was a technical hurdle.

3. Location Tracking: Recording accurate location data and integrating it seamlessly with image detection was challenging.

## Solutions Implemented 💡
1. AI-Powered Detection: Utilized the Hugging Face API to accurately identify garbage in images, ensuring reliable detection.

2. Location Tracking: Implemented a location tracking system using MongoDB, which records the coordinates of garbage detection incidents.

3. FastAPI Backend: Leveraged FastAPI to create a robust backend for handling image uploads, AI detection, and location storage.

4. React Frontend: Developed a user-friendly frontend using React and Vite, enabling users to interact with the system seamlessly.

   ## How It Works 🔧
1. Users upload images of waste through the API endpoints.
2. The Hugging Face API analyzes the images to detect garbage.
3. If garbage is detected with a certain confidence, the location coordinates are stored in MongoDB.
4. The React frontend connects to the FastAPI backend to visualize data and provide a user interface.

##   API Endpoints 🔑
GET /: A simple endpoint returning "Hello, world!"
GET /blogs: Retrieves blog data from MongoDB.
POST /check/: Accepts an image and coordinates, performs garbage detection, and records location if necessary.
POST /check_once/: Accepts coordinates and records location without image detection.


## Conclusion 🏁
WasteX leverages cutting-edge technologies to mitigate improper waste disposal. By combining AI-based image detection with accurate location tracking, the system contributes to creating a cleaner and healthier environment. The frontend offers an intuitive interface for users to interact with the system seamlessly. Through this solution, we aim to promote responsible waste management practices and drive positive environmental change.
