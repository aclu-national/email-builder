# Pull Request

Pull Request (PR) are useful for implementing code reviews and running checks on the code before merging onto the main branch.

While PR are not a native feature of git &ndash; they are added by the remote repositories (Github, Gitlab, BitBucket). Each service handles them differently.

Pull request should merge the working branch to `main`.

![Github Pull Request](../static/screenshots/github-pr.png)

## Merging

We will be using `squash` to merge PRs. This compresses all commits pushed to that PR into a singular commit in the git history. This is useful when making smaller commits that all fix the same issue.

This means that PR names will have to follow `Conventional Commits` as well. So keep your PR changes smaller as they are easier to code review.
