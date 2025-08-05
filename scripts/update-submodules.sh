#!/bin/bash

# This script handles stale submodule references and ensures clean initialization

set -e

echo "Updating submodules..."

update_submodule() {
  local submodule_path=$1
  local submodule_name=$(basename "$submodule_path")
  
  echo "Processing submodule: $submodule_name"
  
  if [ -d "$submodule_path" ]; then
    echo "Deinitializing existing submodule..."
    git submodule deinit -f "$submodule_path" || true
  fi
  
  if [ -d "$submodule_path" ]; then
    echo "Removing stale directory..."
    rm -rf "$submodule_path"
  fi
}

update_submodule "_external/aria-practices"
update_submodule "_external/data"

echo "Initializing submodules..."
git submodule update --init --recursive

echo "Submodule update completed successfully!"

echo "Final submodule status:"
git submodule status 
