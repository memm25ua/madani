pipeline {
    agent {
        node {
            label 'mac-mini-casa'  // This specifies the node label you'll set up in Jenkins
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
                sh 'docker-compose up -d'
            }
        }
        stage('Cleanup') {
            when {
                branch 'main'
            }
            steps {
                echo 'Stopping and removing the container...'
                sh 'docker-compose down'
            }
        }
    }
}
