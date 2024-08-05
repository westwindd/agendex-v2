<template>
  <div class="home-page" :class="{ 'sidebar-active': isSidebarActive }" :style="{ '--primary-color': primaryColor }">
    <nav class="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li v-if="isAdmin"><a href="#dashboard">Dashboard</a></li>
        <li v-if="!isAdmin"><a href="#bookings">My Bookings</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#logout" @click="logout">Logout</a></li>
      </ul>
    </nav>
    <div class="hamburger" @click="toggleSidebar">
      &#9776;
    </div>
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li v-if="isAdmin"><a href="#dashboard">Dashboard</a></li>
          <li v-if="!isAdmin"><a href="#bookings">My Bookings</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#logout" @click="logout">Logout</a></li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <section class="welcome-section">
        <h1>Welcome to the Booking System</h1>
        <p>Book your rooms easily and efficiently with our system.</p>
      </section>
      <section v-if="!isAdmin" class="search-section">
        <h2>Find a Room</h2>
        <p>Use the search box below to find available rooms based on your preferences. You can enter keywords like "conference", "meeting", or "large" to filter the rooms.</p>
        <input type="text" placeholder="Search for rooms..." />
      </section>
      <section v-if="!isAdmin" class="featured-rooms">
        <h2>Featured Rooms</h2>
        <p>Explore some of our popular rooms. Click on a room to see more details and book it.</p>
        <div class="cards-container">
          <div class="card" v-for="n in 4" :key="n">
            <h3>Room {{ n }}</h3>
            <p>Details about the room and its features. Ideal for meetings, conferences, and more.</p>
          </div>
        </div>
      </section>
      <section v-if="!isAdmin" class="user-dashboard">
        <h2>Your Bookings</h2>
        <p>Here are your upcoming bookings. You can click on a booking for more details or to make changes.</p>
        <div class="cards-container">
          <div class="card" v-for="booking in userBookings" :key="booking.id">
            <h3>{{ booking.roomName }}</h3>
            <p>{{ booking.date }} - {{ booking.time }}</p>
          </div>
        </div>
      </section>
      <section v-if="!isAdmin" class="calendar-view">
        <h2>Your Booking Calendar</h2>
        <p>View your booked rooms in a calendar format for easy scheduling and management.</p>
        <!-- Add your calendar component or plugin here -->
      </section>
      <section v-if="isAdmin" class="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <div class="stats-container">
          <div class="stat" v-for="stat in bookingStats" :key="stat.label">
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
        <div class="charts-container">
          <section class="chart-description">
            <h3>Rooms Most Used This Week</h3>
            <p>This bar chart shows the number of times each room was booked over the past week. It helps identify which rooms are in high demand and may require special attention for maintenance or availability.</p>
            <canvas id="roomsMostUsedChart"></canvas>
          </section>
          <section class="chart-description">
            <h3>Booking Trends Throughout the Week</h3>
            <p>This line chart displays the total number of bookings made on each day of the week. The rounded lines highlight fluctuations in booking activity, providing insights into peak days and allowing better management of room availability.</p>
            <canvas id="daysMostRequestedChart"></canvas>
          </section>
        </div>
        <section class="recent-activities">
          <h2>Recent Activities</h2>
          <div class="activity" v-for="activity in recentActivities" :key="activity.id">
            <p>{{ activity.description }} - {{ activity.date }}</p>
          </div>
        </section>
        <section class="frequently-booked">
          <h2>Frequently Booked Rooms</h2>
          <div class="cards-container">
            <div class="card" v-for="room in frequentlyBookedRooms" :key="room.id">
              <h3>{{ room.name }}</h3>
              <p>{{ room.details }}</p>
            </div>
          </div>
        </section>
        <section class="color-picker-section">
          <h2>Change Primary Color</h2>
          <p>Customize the interface by selecting your preferred primary color.</p>
          <input type="color" v-model="primaryColor" />
        </section>
      </section>
      <section class="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Contact us at:</p>
        <p>Email: contact@bookingsystem.com</p>
        <p>Phone: 123-456-7890</p>
      </section>
    </main>
  </div>
</template>

<script>
import { Chart } from 'chart.js';

export default {
  name: "HomePage",
  data() {
    return {
      isSidebarActive: false,
      isAdmin: true, // Change based on actual user role
      primaryColor: '#ff416c', // Default primary color
      userBookings: [
        { id: 1, roomName: "Conference Room A", date: "2024-08-15", time: "10:00 AM - 12:00 PM" },
        { id: 2, roomName: "Meeting Room B", date: "2024-08-16", time: "2:00 PM - 3:00 PM" },
      ],
      recentActivities: [
        { id: 1, description: "Booked Conference Room A", date: "2024-08-14" },
        { id: 2, description: "Canceled booking for Meeting Room B", date: "2024-08-13" },
      ],
      frequentlyBookedRooms: [
        { id: 1, name: "Conference Room A", details: "Spacious room with projectors and whiteboards." },
        { id: 2, name: "Meeting Room B", details: "Cozy room for small meetings, equipped with a TV." },
      ],
      bookingStats: [
        { label: "Total Bookings", value: 120 },
        { label: "Upcoming Bookings", value: 5 },
        { label: "Canceled Bookings", value: 3 },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    logout() {
      // Add your logout logic here
      alert("Logging out...");
    },
    renderCharts() {
      // Rooms Most Used Chart
      const roomsMostUsedCtx = document.getElementById('roomsMostUsedChart').getContext('2d');
      new Chart(roomsMostUsedCtx, {
        type: 'bar',
        data: {
          labels: ['Conference Room A', 'Meeting Room B', 'Conference Room C', 'Meeting Room D'],
          datasets: [{
            label: 'Bookings',
            data: [12, 19, 8, 5], // Example data
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `Bookings: ${context.raw}`;
                }
              }
            }
          }
        }
      });

      // Days Most Requested Chart
      const daysMostRequestedCtx = document.getElementById('daysMostRequestedChart').getContext('2d');
      new Chart(daysMostRequestedCtx, {
        type: 'line',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Bookings',
            data: [15, 20, 10, 18, 22, 5, 8], // Example data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `Bookings: ${context.raw}`;
                }
              }
            }
          }
        }
      });
    }
  },
  mounted() {
    this.renderCharts();
  }
}
</script>

<style scoped>
/* Same styles as previously provided */
</style>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
  box-sizing: border-box;
}

:root {
  --primary-color: #ff416c;
}

html, body {
  height: 100%;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.home-page {
  display: flex;
  height: 100vh;
  transition: all 0.3s ease;
}

.navbar {
  width: 100%;
  background: var(--primary-color);
  color: #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1100;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.navbar ul li {
  margin: 0;
}

.navbar ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.navbar ul li a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.hamburger {
  font-size: 1.5rem;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100;
  display: none;
}

.sidebar {
  width: 250px;
  background: var(--primary-color);
  color: #ffffff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: -250px;
  transition: left 0.3s ease;
  height: 100%;
  z-index: 1000;
}

.sidebar-active .sidebar {
  left: 0;
}

.sidebar nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 1rem 0;
}

.sidebar nav ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.sidebar nav ul li a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.content {
  flex-grow: 1;
  padding: 2rem;
  margin-left: 0;
  transition: margin-left 0.3s ease;
  width: 100%;
  padding-top: 5rem; /* Adjust to prevent content overlap with navbar */
}

.sidebar-active .content {
  margin-left: 250px;
}

.welcome-section {
  background: linear-gradient(to right, var(--primary-color), var(--primary-color));
  color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.search-section {
  margin-top: 2rem;
}

.search-section input {
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 1rem;
  width: calc(25% - 1rem);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.32);
}

.activity, .stat {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 1rem;
  width: calc(25% - 1rem);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity:hover, .stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.32);
}

.stats-container, .charts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.chart {
  width: 100%;
  max-width: 600px;
}

.color-picker-section {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-picker-section input[type="color"] {
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
}

h1, h2, h3 {
  font-size: 24px;
}

p {
  font-size: 14px;
}

@media (max-width: 768px) {
  .navbar {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .sidebar-active .content {
    margin-left: 0;
  }
}
</style>
