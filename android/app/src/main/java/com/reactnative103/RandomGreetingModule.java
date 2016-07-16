package com.reactnative103;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Random;

/**
 * Created by albertoirurueta on 16/7/16.
 */
public class RandomGreetingModule extends ReactContextBaseJavaModule {

    private String[] mGreetings;

    public RandomGreetingModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mGreetings = new String[]{
                "Hey %1$s, whats up bro",
                "Welcome %1$s %2$s",
                "Come on! Mr %1$s %2$s is here",
                "Ladies & Gentlemen, here is %1$s %2$s",
                "%1$s, Ey dude!"
        };
    }

    @Override
    public String getName() {
        return "RandomGreeting";
    }

    public String randomGreeting(String firstName, String lastName) {
        String random = mGreetings[new Random().nextInt(mGreetings.length)];
        return String.format(random, firstName, lastName);
    }

    public void sayFirstName(String firstName, String lastName) {
        Log.i(RandomGreetingModule.class.getSimpleName(), randomGreeting(firstName, lastName));
    }

    @ReactMethod
    public void say(String firstName, String lastName, Promise promise) {
        String greeting = randomGreeting(firstName, lastName);
        promise.resolve(greeting);
    }
}
