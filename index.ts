import * as pulumi from "@pulumi/pulumi";
import * as pulumiDeploymentSettings from "./components/pulumi/deployment-settings";

const appConfig = new pulumi.Config();

export = async () => {

    const deploymentSettings = new pulumiDeploymentSettings.PulumiDeploymentSettings("deploymentSettings", {
        prefixName: "pulumi-basic-app",
        accessToken: appConfig.get("pulumiAccessToken"),
    });

    return {};
}