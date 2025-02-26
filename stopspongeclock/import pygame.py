import pygame
import mido
import math
import random

# Initialize Pygame
pygame.init()

# Setup display
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Bouncing Ball with MIDI")

# Colors
black = (0, 0, 0)
white = (255, 255, 255)

# Ball parameters
ball_radius = 20
ball_color = white
ball_x = width // 2
ball_y = height // 2
ball_speed_x = 3
ball_speed_y = 3

# Circle parameters
circle_radius = min(width, height) // 2 - ball_radius

# Load MIDI file
midi_file = 'your_midi_file.mid'
midi = mido.MidiFile(midi_file)
midi_notes = [msg for msg in midi if not msg.is_meta and msg.type == 'note_on']
note_index = 0

# Setup MIDI output
midi_output = mido.open_output(mido.get_output_names()[0])

def play_midi_note():
    global note_index
    if note_index < len(midi_notes):
        midi_output.send(midi_notes[note_index])
        note_index += 1
    else:
        note_index = 0  # Reset to the beginning if we reach the end

# Function to check if the ball is touching the circle border
def touching_border(x, y, r):
    distance = math.sqrt((x - width // 2) ** 2 + (y - height // 2) ** 2)
    return abs(distance - circle_radius) < r

# Main loop
running = True
clock = pygame.time.Clock()

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Move the ball
    ball_x += ball_speed_x
    ball_y += ball_speed_y

    # Check collision with the circle border
    if touching_border(ball_x, ball_y, ball_radius):
        ball_speed_x *= -1
        ball_speed_y *= -1
        play_midi_note()
        # Increase speed slightly
        ball_speed_x *= 1.05
        ball_speed_y *= 1.05

    # Clear screen
    screen.fill(black)

    # Draw circle
    pygame.draw.circle(screen, white, (width // 2, height // 2), circle_radius, 2)

    # Draw ball
    pygame.draw.circle(screen, ball_color, (int(ball_x), int(ball_y)), ball_radius)

    # Update display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(60)

# Cleanup
pygame.quit()
midi_output.close()
