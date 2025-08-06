pipeline {
    agent {
        node {
            label 'msi-ubuntu' 
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                sh 'docker build -t madani-portfolio .'
            }
        }
        stage('Deployy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying the container...'
                sh 'docker compose up -d'
            }
        }
    }
}
