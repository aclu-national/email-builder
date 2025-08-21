# Snippets

A collection of `VS Code` snippets. These snippets will only be called when you have this current directory open.

## Nunjucks

> _Note: dollar sign and number ($1) are tab stops for `VS Code.`_

A collection of Nunjucks snippets to that make some it quicker to prototype.

#### Var

You can use this to call front-matter placed at the top of the file. This is also used on `for` loops.

<!-- prettier-ignore-start -->
```
var
```
<!-- prettier-ignore-end -->

outputs

<!-- prettier-ignore-start -->
```njk
{{$1}}
```
<!-- prettier-ignore-end -->

#### Include

Lets you pull in code from another file. This is useful to break up code into chunks to make it easier to manage.

<!-- prettier-ignore-start -->
```
include
```
<!-- prettier-ignore-end -->

outputs

<!-- prettier-ignore-start -->
```njk
{% include "$1" %}
```
<!-- prettier-ignore-end -->

#### If Statement

Use this is you want to check if something is `true` or `false`.

<!-- prettier-ignore-start -->
```
if
```
<!-- prettier-ignore-end -->

outputs

<!-- prettier-ignore-start -->
```njk
{% if $1 %}
	$2
{% endif %}
```
<!-- prettier-ignore-end -->

#### If/Else Statement

Use this when you want to check if logic and if not found display a fallback.

<!-- prettier-ignore-start -->
```
ifel
```
<!-- prettier-ignore-end -->

outputs

<!-- prettier-ignore-start -->
```njk
{% if $1 %}
	$2
{% else %}
	$3
{% endif %}
```
<!-- prettier-ignore-end -->

#### Elseif Statement

<!-- prettier-ignore-start -->
```
elif
```
<!-- prettier-ignore-end -->

outputs

<!-- prettier-ignore-start -->
```njk
{% if $1 %}
	$2
{% elif $3 %}
	$4
{% else %}
	$5
{% endif %}
```
<!-- prettier-ignore-end -->

#### For Loop

<!-- prettier-ignore-start -->
```
for
```
<!-- prettier-ignore-end -->

outputs

<!-- prettier-ignore-start -->
```njk
{% for item in items %}
	{{item}}
{% endfor %}
```
<!-- prettier-ignore-end -->

## Email

This section contains snippets that are useful for email.

#### Table Wrapper

This snippet displays the code for a table for our current template. This is useful if you want to use the existing templates to build a new component.

<!-- prettier-ignore-start -->

```html
<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="email-wrapper" width="{{theme.sizing.wrapper}}">
	<tbody>
		<tr>
			<td style="
			color: {{theme.colors.default.black}};
			font-family: {{theme.typography.sans}};
			font-size: {{theme.typography.body}};
			line-height: {{theme.typography.lineHeight}};
			padding: {{theme.sizing.contentPadding}};" valign="top">
				<p>$1</p>
			</td>
		</tr>
	</tbody>
</table>
```
<!-- prettier-ignore-end -->
