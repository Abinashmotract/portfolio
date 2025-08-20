pipeline {
    agent any

    environment {
        IMAGE_NAME = "docker.io/abinashsinha01/portfolio"
        IMAGE_TAG = "${BUILD_NUMBER}"
        CONTAINER_PORT = "2836"
        HOST_PORT = "2836"
        CONTAINER_NAME = "${JOB_BASE_NAME}-container"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build React App') {
            steps {
                sh '''
                    echo "📦 Installing dependencies & building React app"
                    npm install --force
                    npm run build
                '''
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'docker-hub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )]) {
                        sh '''
                            echo Logging in to Docker Hub...
                            echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        '''
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }

        stage('Tag & Push Docker Image') {
            steps {
                sh '''
                    docker tag $IMAGE_NAME:$IMAGE_TAG $IMAGE_NAME:latest
                    docker push $IMAGE_NAME:$IMAGE_TAG
                    docker push $IMAGE_NAME:latest
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    echo "🛑 Stopping old container if exists"
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true

                    echo "🚀 Running new container"
                    docker run -d \
                    --name $CONTAINER_NAME \
                    -p $HOST_PORT:$CONTAINER_PORT \
                    $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }

    post {
        always {
            script {
                echo "📩 Sending deployment email..."
                emailext (
                    to: 'abinas.h0870@gmail.com',
                    subject: "Deployment Pipeline - ${currentBuild.fullDisplayName}",
                    body: "Job '${env.JOB_NAME} [#${env.BUILD_NUMBER}]' completed with status: ${currentBuild.currentResult}"
                )
            }
        }
    }
}
