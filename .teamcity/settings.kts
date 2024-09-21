version = "2021.2"

project {
    buildType(Build)

    features {
        vcsLabeling {
            vcsRootExtId = "${VcsRoot.id}"
            labelingPattern = "%build.vcs.number%"
            successfulOnly = true
        }
    }
}

object Build : BuildType({
    name = "Build and Test Color App"

    vcs {
        root(DslContext.settingsRoot)
    }

    steps {
        script {
            name = "Install Dependencies"
            scriptContent = "npm install"
        }
        script {
            name = "Run Unit Tests"
            scriptContent = "npm test"
        }
        dockerBuild {
            name = "Build Docker Image"
            file = "Dockerfile"
        }
    }

    triggers {
        vcs {
            branchFilter = "+:<default>"
        }
    }
})
