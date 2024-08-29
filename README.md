# Marks Jewelers Shopify Theme

## Installation

To install dependencies, navigate into the project directory and run:

```
  npm install
```

## Requirements

You'll need a "Staff Account" in the MJ store. You should be able to configure that here:

https://marks-jewelers-dev.myshopify.com/admin/settings/account

You will also need to install the Shopify CLI:

https://shopify.dev/apps/tools/cli/installation

Which will require Ruby:

https://www.ruby-lang.org/en/

Git:

https://git-scm.com/downloads

And Node:

https://nodejs.org/en/download/

## Development

First, log into the store via the Shopify CLI:

```
  shopify login --store=marks-jewelers-dev.myshopify.com
```

To begin local development with a temporary/hidden theme, run:

```
  npm run start
```

To push your local changes to your theme inside of Shopify, run:

```
  npm run deploy
```

and select the theme that you would like to publish to.

You'll also need to create a new branch in Git for your changes and make a new theme in the Shopify store by duplicating
the **MJ Theme** theme.

Give your new theme a name you'll remember - the Shopify CLI will ask you to select the theme by its name in your
terminal when you push your changes.

If you notice that the page looks a bit broken after you set up the new theme - it may be because the theme settings are
blank in the **MJ Theme** that you duplicated.

You can go into the "Edit Code" portion of the theme that you just created and replace the contents of the .json files
in the "Config" section with the contents of the exact same .json files saved in the main branch of the repo.

## Deployment

- Sync the *main* branch in GitHub with the current live theme by checking out the *main* branch and then running the *shopify theme pull* command, selecting the current live theme, and committing + pushing the changes to the *main* branch. 


- Duplicate the existing live theme in the Shopify admin dashboard and give it a name that provides context for what this update does.


- Merge the PR for this update into *main* branch using GitHub.


- Pull the merged changes into your local environment by running the *git pull* command while on the *main* branch.


- Compile the JS/CSS and deploy the changes to the new theme by running the *npm run deploy* command and selecting the new theme that you created in step #2.


- After deploying, test the new theme to make sure that all the changes were included and that nothing else broke.


- Publish the new theme that you deployed your changes to as the currently live theme using the Shopify admin dashboard.
