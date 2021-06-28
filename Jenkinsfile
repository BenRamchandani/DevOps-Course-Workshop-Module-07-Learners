pipeline {
    agent none

    environment {
        DOTNET_CLI_HOME = "/tmp/DOTNET_CLI_HOME"
    }

    stages {
        stage('Typescript') {
            agent {
                docker { image 'node:14-alpine' }
            }
            stages {
                stage('Checkout') {
                    steps {
                        checkout scm
                    }
                }
                stage('Typescript Build') {
                    steps {
                        dir("DotnetTemplate.Web/") {
                            sh "npm ci"
                            sh "npm run build"
                        }
                    }
                }
                stage('Typescript Lint') {
                    steps {
                        dir ("DotnetTemplate.Web/") {
                            sh "npm run lint"
                        }
                    }
                }
                stage('Typescript Tests') {
                    steps {
                        dir ("DotnetTemplate.Web/") {
                            sh "npm run test-with-coverage"
                        }
                    }
                }

            }
        }
        stage ('Dotnet') {
            agent {
                docker { image 'mcr.microsoft.com/dotnet/sdk:5.0' }
            }
            stages {
                stage('Dotnet Build') {
                    steps {
                        sh "dotnet build DotnetTemplate.sln"
                    }
                }
                stage('Dotnet Tests') {
                    steps {
                        sh "dotnet test DotnetTemplate.Web.Tests"
                    }
                }
            }
        }
    }
}
