package com.reactnative103;

import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by albertoirurueta on 16/7/16.
 */
public class UserInputViewManager extends SimpleViewManager<UserInputView> {
    @Override
    public String getName() {
        return "UserInputView";
    }

    @Override
    protected UserInputView createViewInstance(final ThemedReactContext reactContext) {
        UserInputView v = new UserInputView(reactContext);
        v.setListener(new UserInputView.UserInputViewListener() {
            @Override
            public void onUserInputUpdate(UserInputView view) {
                //relanzamos evento
                Log.i("UserInputViewManager", "update clicked!");
                WritableMap usr = Arguments.createMap();
                usr.putString("firstName", view.getName());
                usr.putString("lastName", view.getLastName());

                WritableMap event = Arguments.createMap();
                event.putMap("user", usr);
                ReactContext reactContext1 = (ReactContext)view.getContext();
                reactContext1.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).
                        emit("onUpdate", event);
                Log.i("UserInputViewManager", "update sent to React");
/*                reactContext1.getJSModule(RCTEventEmitter.class).receiveEvent(view.getId(),
                        "onUpdate", event);*/
            }
        });
        return v;
    }

    @ReactProp(name = "firstName")
    public void setName(UserInputView view, @Nullable String name) {
        view.setName(name);
    }

    @ReactProp(name = "lastName")
    public void setLastName(UserInputView view, @Nullable String lastName) {
        view.setLastName(lastName);
    }
}