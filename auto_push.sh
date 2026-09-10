#!/bin/bash

# Prompt for commit message with a timestamped default
DEFAULT_MSG="Auto-commit: $(date +'%Y-%m-%d %H:%M:%S')"
read -p "Enter commit message [Default: '$DEFAULT_MSG']: " COMMIT_MSG
COMMIT_MSG=${COMMIT_MSG:-$DEFAULT_MSG}

# Execute Git workflow
echo "Staging changes..."
git add .

echo "Committing..."
git commit -m "$COMMIT_MSG"

echo "Pushing to origin main..."
git push origin main

echo "Done!"