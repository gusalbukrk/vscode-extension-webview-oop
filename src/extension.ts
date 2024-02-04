import * as vscode from 'vscode';
import HelloWorldPanel from './panels/HelloWorldPanel';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "extension" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', () => {
		// vscode.window.showInformationMessage('Hello World from extension!');
		HelloWorldPanel.render();
	}));
}

export function deactivate() {}
