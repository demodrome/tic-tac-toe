/**
 * Creates a player object
 * @constructor
 * @param {String} name The player's name
 * @param {String} marker The player's marker
 */
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.score = 0;
}

/**
 * Set the player's name
 * @param {String} name The player's name
 * @returns The player's name
 */
Player.prototype.setName = function(name) {
  return this.name = name;
}

/**
 * Get the player's name
 * @returns The player's name
 */
Player.prototype.getName = function() {
  return this.name;
}

/**
 * Set the marker that will represent the player on the board
 * @param {String} marker The player's marker
 * @returns The marker
 */
Player.prototype.setMarker = function(marker) {
  return this.marker = marker;
}

/**
 * Get the player's marker
 * @returns The marker
 */
Player.prototype.getMarker = function() {
  return this.marker;
}

/**
 * Reset the player's score to zero
 * @returns The score
 */
Player.prototype.resetScore = function() {
  return this.score = 0;
}

/**
 * Increment the player's score by one
 * @returns The score
 */
Player.prototype.addScore = function() {
  return ++this.score;
}

/**
 * Get the player's score
 * @returns The score
 */
Player.prototype.getScore = function() {
  return this.score;
}

export default Player;