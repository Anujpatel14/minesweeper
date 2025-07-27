# Minesweeper Project - Integral Concepts

## Project Overview
This is a Minesweeper game implementation with web version, featuring React Native for a web-based version with different features.

---

## Core Game Concepts

### 1. **Game Board Structure**
- **Object**: 2D grid representing the game board
- **Context**: Foundation of the entire game mechanics
- **Important Information**:
  - Board size varies by difficulty (8x8, 9x9, 16x16, custom)
  - Each cell contains either a mine (-1) or a number (0-8)
  - Numbers indicate adjacent mine count
  - Board is dynamically generated for each new game

### 2. **Mine Placement Algorithm**
- **Object**: Random mine distribution system
- **Context**: Core game generation logic
- **Important Information**:
  - Mines are placed randomly using `Math.random()`
  - Mine count is typically 15% of total cells
  - Prevents duplicate mine placement

### 3. **Cell Number Calculation**
- **Object**: Adjacent mine counting system
- **Context**: Provides player with information for strategic decisions
- **Important Information**:
  - Scans 8 adjacent cells
  - Numbers 1-8 represent mine count in adjacent cells
  - Zero indicates safe area with no adjacent mines
  - Enables recursive revealing of empty areas

### 4. **Game State Management**
- **Object**: React state variables tracking game progress
- **Context**: Controls game flow and UI updates
- **Important Information**:
  - `gameOver`: Boolean for loss condition
  - `gameWon`: Boolean for win condition
  - `revealed`: Set of revealed cell coordinates
  - `flagged`: Set of flagged cell coordinates
  - `startTime`/`endTime`: Timer tracking

---

## User Interface Concepts

### 5. **Responsive Grid Layout**
- **Object**: CSS Grid-based board rendering
- **Context**: Adapts to different screen sizes and orientations
- **Important Information**:
  - Uses CSS Grid with dynamic column count
  - Maintains aspect ratio across devices


### 6. **Dark Mode Implementation**
- **Object**: CSS custom properties for theme switching
- **Context**: Improves user experience in different lighting conditions
- **Important Information**:
  - Uses CSS custom properties
  - Smooth transitions between themes
  - Affects all UI elements consistently

---

## Game Logic Concepts

### 7. **Recursive Cell Revealing**
- **Object**: Algorithm for revealing connected empty cells
- **Context**: Core gameplay mechanic for revealing safe areas
- **Important Information**:
  - Recursively reveals adjacent cells when clicking empty cell
  - Stops at numbered cells or board boundaries
  - Improves game flow and reduces tedious clicking

### 8. **Win/Loss Condition Checking**
- **Object**: Game state validation system
- **Context**: Determines when game ends
- **Important Information**:
  - Win: All non-mine cells revealed
  - Loss: Mine cell clicked
  - Updates game state immediately
  - Triggers game summary modal

### 9. **Flagging System**
- **Object**: Player marking system for suspected mines
- **Context**: Strategic gameplay element
- **Important Information**:
  - Right-click or long-press to flag
  - Prevents accidental revealing of flagged cells
  - Counts flags for statistics

---

## Data Management Concepts

### 10. **Local Storage System**
- **Object**: Game History
- **Context**: Saves game history and player preferences
- **Important Information**:
  - Stores game history
  - Saves player profiles and records
  - Maintains last 10 games history

### 11. **Game Statistics Tracking**
- **Object**: Performance metrics collection
- **Context**: Provides feedback and motivation
- **Important Information**:
  - Tracks completion time
  - Records difficulty levels
  - Maintains win/loss ratios
  - Stores player achievements


---


## Audio and Visual Concepts

### 12. **Sound Effects **
- **Object**: Audio for user actions
- **Context**: Enhances user experience and engagement
- **Important Information**:
  - Click sound for cell reveals
  - Explosion sound for mine hits
---

## Game Modes and Difficulty

### 13. **Difficulty Level System**
- **Object**: Predefined & Custom game
- **Context**: different skill levels
- **Important Information**:
  - Easy: 8x8 board, 10 mines
  - Medium: 12x12 board, 25 mines
  - Hard: 16x16 board, 40 mines
  - Custom: User-defined parameters

### 14. **Custom Game Mode**
- **Object**: User-configurable game parameters
- **Context**: Allows personalized challenge levels
- **Important Information**:
  - Board size: 5x5 to 30x30
  - Mine count: 1 to (total cells - 1)
  - Input validation for parameters

---

## Security and Reliability

### 15. **Input Validation**
- **Object**: User input 
- **Context**: Prevents crashes and invalid game states
- **Important Information**:
  - Validates board size limits
  - Ensures mine count is reasonable
  - Prevents invalid cell coordinates

---