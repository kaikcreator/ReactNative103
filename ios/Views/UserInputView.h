//
//  UserInputView.h
//  ReactNative103
//
//  Created by Enrique Oriol on 15/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UserInputView : UIView

@property (weak, nonatomic) IBOutlet UITextField *firstNameInput;
@property (weak, nonatomic) NSString *firstName;

@property (weak, nonatomic) IBOutlet UITextField *lastNameInput;
@property (weak, nonatomic) NSString *lastName;

@end
