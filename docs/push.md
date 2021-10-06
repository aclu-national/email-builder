# Push

> [Commit Often, Perfect Later, Publish Once](https://sethrobertson.github.io/GitBestPractices/)
> --Seth Robertson

You should at the very minimum push once at the end of the work day. By ensuring code (even WIP) gets pushed daily, we can have backups incase any issue happens with your machine.

These do the same thing. The flag `-u` is a shorthand version of `--set-upstream`.

<!-- prettier-ignore-start -->
```
git push --set-upstream <remote> <branch>
git push -u <remote> <branch>
```
<!-- prettier-ignore-end -->

Next time you make a want to push to remote on this branch, you'll just have to use:

<!-- prettier-ignore-start -->
```
git push
```
<!-- prettier-ignore-end -->
