//
//  UserInputView.h
//  ReactNative103
//
//  Created by Enrique Oriol on 15/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "RCTComponent.h"

@class UserInputView;

//define delegate
@protocol UserInputDelegate <NSObject>
@required
- (void) onUserInputUpdate:(UserInputView*)view;
@end


@interface UserInputView : UIView

//define button callback
-(IBAction) updateUser: (id)sender;


@property (weak, nonatomic) id <UserInputDelegate> delegate;

@property (weak, nonatomic) IBOutlet UITextField *firstNameInput;


@property (weak, nonatomic) IBOutlet UITextField *lastNameInput;




@end
