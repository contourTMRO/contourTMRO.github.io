#!/bin/bash

# Function to generate file content
generate_file_content() {
    local slide_number="$1"
    
    echo "import './Studentslide.css';
import React from 'react';

function Studentslide$slide_number() {
  return (
    <div class=\"body\">
           
    </div>
  );
}
  
export default Studentslide$slide_number;"
}

# Function to create files
create_files() {
    local start_slide="$1"
    local end_slide="$2"
    
    for ((slide_number = start_slide; slide_number <= end_slide; slide_number++))
    do
        local file_name="Studentslide$slide_number.js"
        local file_content="$(generate_file_content $slide_number)"
        
        echo "$file_content" > "$file_name"
        echo "Created file: $file_name"
    done
}

# Usage: create_files <start_slide> <end_slide>
create_files 3 42