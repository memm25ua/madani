pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                sh 'docker build -t madani-portfolio .'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the container...'
                sh 'docker-compose up -d'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Stopping and removing the container...'
                sh 'docker-compose down'
            }
        }
    }
}
